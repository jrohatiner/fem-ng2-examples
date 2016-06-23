import { Component } from '@angular/core';
import { Code } from './code/code';
import { MyComponent } from './components/my.component';
import { MyService } from './services/my.service';

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
    <div class="rendered" flex layout="column" layout-fill>
      <h1><small>Counter:</small> {{service.counter}}</h1>
      <div>
        <my-component></my-component>
        <my-component></my-component>
        <my-component></my-component>
      </div>
    </div>
  `,
  directives: [ Code, MyComponent ]
})

export class App {
  constructor(service: MyService) {
    this.service = service;
  }
}
