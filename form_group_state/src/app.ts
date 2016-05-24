import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Code } from './code/code';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

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
        <div ngControlGroup="name" #nameGroup="ngForm">
          <md-input-container>
            <label>First Name</label>
            <input required md-input [(ngModel)]="person.firstName" #firstName="ngForm" ngControl="firstName" type="text">
          </md-input-container>
          <md-input-container>
            <label>Last Name</label>
            <input required md-input [(ngModel)]="person.lastName" #lastName="ngForm" ngControl="lastName" type="text">
          </md-input-container>
        </div>
        <div>
          <md-input-container>
            <label>Title</label>
            <input md-input [(ngModel)]="person.title" #title="ngForm" ngControl="title" type="text" >
          </md-input-container>
        </div>
      </form>
      <br>
      <pre>{{person | json}}</pre>
      
      <!-- For demonstration purposes only -->
      {{logControls(nameGroup, firstName, lastName, title)}}
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
  
  logControls(nameGroup, firstName, lastName, title) {
    console.clear();
    console.log(nameGroup);
    console.log(firstName);
    console.log(lastName);
    console.log(title);
  }
}