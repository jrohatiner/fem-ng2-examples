import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Code } from './code/code';

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
        <a [routerLink]="['/my-component']"
                md-button class="md-warn">My Component Link</a>
        <a [routerLink]="['/another-component']"
                md-button class="md-warn">Another Component Link</a>
      </div>
      <h1>Introducing...</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ Code, ROUTER_DIRECTIVES ]
})

export class App {}
