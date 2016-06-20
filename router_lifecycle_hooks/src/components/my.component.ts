import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-component',
  template: `
    <h1>my component!</h1>
    <a [routerLink]="['/another-component']"
            md-button md-raised-button>Another Component</a>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})

export class MyComponent {}
