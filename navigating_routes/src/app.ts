import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Code } from './code/code';
import { MyComponent } from './components/my.component';
import { AnotherComponent } from './components/another.component';

@Component({
  selector: 'app',
  template: `
    <code-tabs></code-tabs>
    <md-toolbar>
      <div class="md-toolbar-tools">
        <div layout-margin layout layout-align="center">
          <h1>Output</h1>
        </div>
      </div>
    </md-toolbar>
    <div class="rendered" flex layout-fill layout="column">
      <div>
        <button [routerLink]="['/MyComponent']" md-button class="md-warn">My Component Link</button>
        <button [routerLink]="['/AnotherComponent']" md-button class="md-warn">Another Component Link</button>
      </div>
      <div>
        <button (click)="navigate('MyComponent')" md-button md-raised-button>My Component from Controller</button>
        <button (click)="navigate('AnotherComponent')" md-button md-raised-button>Another Component from Controller</button>
      </div>
      <h1>Introducing...</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ Code, ROUTER_DIRECTIVES ]
})

@RouteConfig([
  {path:'/my-component', name: 'MyComponent', component: MyComponent},
  {path:'/another-component', name: 'AnotherComponent', component: AnotherComponent, useAsDefault: true}
])

export class App {
  constructor(private _router: Router) {}
  navigate(route) {
    this._router.navigate([`/${route}`]);
  }
}