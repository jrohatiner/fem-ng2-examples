import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
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
        <button [routerLink]="['./MyComponent', {id: 1}]" md-button class="md-warn">My Component Link</button>
        <button [routerLink]="['./AnotherComponent', {queryParam: 'bar'}]" md-button class="md-warn">Another Component Link</button>
      </div>
      <h1>Introducing...</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ Code, ROUTER_DIRECTIVES ]
})

@RouteConfig([
  {path:'/my-component/:id', name: 'MyComponent', component: MyComponent},
  {path:'/another-component', name: 'AnotherComponent', component: AnotherComponent}
])

export class App {}