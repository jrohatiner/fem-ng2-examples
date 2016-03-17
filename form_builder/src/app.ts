import { Component } from 'angular2/core';
import { Code } from './code/code';
import { FormComponent } from './components/form.component';

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
    <div class="rendered" flex layout="column">
      <my-form></my-form>
    </div>
  `,
  directives: [ Code, FormComponent ]
})

export class App {}