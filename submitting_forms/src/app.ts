import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Code } from './code/code';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
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
    <div class="rendered" flex layout-fill layout="column">
      <my-form></my-form>
    </div>
  `,
  directives: [ Code, FormComponent ]
})

export class App {}