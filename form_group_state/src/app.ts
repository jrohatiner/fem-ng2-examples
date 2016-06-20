import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { Code } from './code/code';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
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
          <md-input placeholder="First Name" required [(ngModel)]="person.firstName"
                    #firstName="ngForm" ngControl="firstName" type="text"></md-input>
          <md-input placeholder="Last Name" required [(ngModel)]="person.lastName"
                    #lastName="ngForm" ngControl="lastName" type="text"></md-input>
        </div>
        <div>
          <md-input placeholder="Title" [(ngModel)]="person.title"
                    #title="ngForm" ngControl="title" type="text" ></md-input>
        </div>
      </form>
      <br>
      <pre>{{person | json}}</pre>

      <!-- For demonstration purposes only -->
      {{logControls(nameGroup, firstName, lastName, title)}}
    </div>
  `,
  directives: [ Code, MATERIAL_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
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
