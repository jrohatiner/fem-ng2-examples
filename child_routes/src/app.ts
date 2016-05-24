import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Code } from './code/code';
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
        <button [routerLink]="['AnotherComponent', 'FirstChild']" md-button class="md-warn">Another Component Link</button>
      </div>
      <h1>Introducing...</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ Code, ROUTER_DIRECTIVES ]
})

@RouteConfig([
  {path:'/another-component/...', name: 'AnotherComponent', component: AnotherComponent}
])

export class App {}
