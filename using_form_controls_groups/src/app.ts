import { Component } from '@angular/core';
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
    <div class="rendered" flex layout-fill layout="column">
      <my-form></my-form>
    </div>
  `,
  directives: [ Code, FormComponent ],
  styles: [`
    md-input-container:not(.md-input-invalid).md-input-focused .md-input {
      border-color: #2196F3
    }
    
    md-input-container.md-input-focused label {
      color: #2196F3;
    }
    
    md-input-container.md-input-focused .md-input {
      border-color: #2196F3
    }
    
    .error { color: red; }
    
    md-input-container.md-input-focused.error label {
      color: red;
    }
    
    md-input-container.md-input-focused.error .md-input {
      border-color: red;
    }
  `]
})

export class App {
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    password: 'superSecretOfGreatLength'
  };
}