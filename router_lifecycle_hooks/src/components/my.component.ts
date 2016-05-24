import { Component } from '@angular/core';
import { CanActivate, CanDeactivate, ComponentInstruction, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-component',
  template: `
    <h1>my component!</h1>
    <button [routerLink]="['/AnotherComponent']" md-button md-raised-button>Another Component</button>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})

@CanActivate(() => {
  let correctPassword = 'p4ssw0rd',
      inputPassword = prompt('Enter a password:', correctPassword);
  
  return inputPassword === correctPassword;
})

export class MyComponent implements CanDeactivate {
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return confirm('Are you sure you want to leave?');
  }  
}