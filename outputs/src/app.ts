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
    <div class="rendered" flex layout-fill layout="column">
      <h1>{{greeting}}</h1>
      <my-component (greeter)="greet($event)"></my-component>
    </div>
  `,
  directives: [Code, MyComponent]
})

export class App {
  greeting: string = 'Click the button for a greeting';

  greet(event) {
    this.greeting = event;
  }
}
