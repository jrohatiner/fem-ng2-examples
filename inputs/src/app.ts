import { Component } from '@angular/core';
import { Code } from './code/code';
import { MyComponent } from './components/my.component';

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
    <div class="rendered">
      <my-component layout-padding [greeting]="greeting"></my-component>
      <md-divider></md-divider>
      <my-component layout-padding></my-component>
    </div>
  `,
  directives: [Code, MyComponent]
})

export class App {
  greeting: String = 'Hello child!';
}