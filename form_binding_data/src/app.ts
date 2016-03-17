import { Component } from 'angular2/core';
import { Code } from './code/code';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

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
      <form>
        <md-input-container>
          <label>Bind me data matey!</label>
          <input md-input [(ngModel)]="componentText" [value]="componentText" type="text">
        </md-input-container>
        <br>
        <span class="md-title"> {{componentText}} </span>
      </form>
    </div>
  `,
  directives: [ Code, MATERIAL_DIRECTIVES ],
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