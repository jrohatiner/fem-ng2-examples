import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
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
    <div class="rendered" flex layout="column">
      <form>
        <md-input-container>
          <label>First Name</label>
          <input required md-input [(ngModel)]="person.firstName" #firstName="ngForm" ngControl="firstName" type="text">
        </md-input-container>
        <md-input-container>
          <label>Last Name</label>
          <input required md-input [(ngModel)]="person.lastName" #lastName="ngForm" ngControl="lastName" type="text">
        </md-input-container>
        <md-input-container>
          <label>Title</label>
          <input md-input [(ngModel)]="person.title" #title="ngForm" ngControl="title" type="text">
        </md-input-container>
      </form>
      <br>
      <pre>{{person | json}}</pre>
      <h2>Check console logs as well</h2>
      
      
      <!-- For demonstration purposes only -->
      {{logControls(firstName, lastName, title)}}
    </div>
  `,
  directives: [ Code, MATERIAL_DIRECTIVES, FORM_DIRECTIVES ],
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
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    title: 'Angular 2 Wizard'
  };
  
  logControls(firstName, lastName, title) {
    console.clear();
    console.log(firstName);
    console.log(lastName);
    console.log(title);
  }
}