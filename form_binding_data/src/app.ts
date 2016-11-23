import { Component } from '@angular/core';
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
    <div class="rendered" flex layout>
      <md-input placeholder="Bind me data matey!"
                [(ngModel)]="componentText"
                [value]="componentText" type="text"></md-input>
      <br>
      <span class="md-title"> {{componentText}} </span>
    </div>
  `,
  directives: [ Code ],
  styles: [`
    md-input-container:not(.md-input-invalid).md-input-focused .md-input {
      border-color: #2196F3
    }

    md-input-container:not(.md-input-invalid).md-input-focused label {
      color: #2196F3;
    }
  `]
})

export class App {
  componentText: String = 'Arrrrrr!';
}
