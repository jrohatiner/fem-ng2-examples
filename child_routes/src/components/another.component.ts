import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { FirstSubComponent } from './child.component';

@Component({
  selector: 'another-component',
  template: `
    <h1>another component!</h1>
    <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
  {path:'/first', name: 'FirstChild', component: FirstSubComponent}
])

export class AnotherComponent {}
