import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'another-component',
  template: `
    <h1>another component!</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})

export class AnotherComponent {}
