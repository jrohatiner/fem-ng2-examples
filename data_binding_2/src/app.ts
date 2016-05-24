import { Component } from '@angular/core';
import { Code } from './code/code';
import { BindingComponent } from './components/binding.component';

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
      <binding-component layout-wrap layout-fill layout="row" layout-align="space-between"></binding-component>
    </div>
  `,
  directives: [Code, BindingComponent]
})

export class App {}