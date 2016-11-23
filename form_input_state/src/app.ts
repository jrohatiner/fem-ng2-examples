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
    <div class="rendered" flex layout="column">
      <form>
        <md-input name="firstName" placeholder="First Name" required [(ngModel)]="person.firstName"
                  #firstName="ngModel" type="text"></md-input>
        <md-input name="lastName" placeholder="Last Name" required md-input [(ngModel)]="person.lastName"
                  #lastName="ngModel" type="text"></md-input>
        <md-input name="title" placeholder="Title" [(ngModel)]="person.title"
                  #title="ngModel" type="text"></md-input>
      </form>
      <br>
      <pre>{{person | json}}</pre>
      <h2>Check console logs as well</h2>


      <!-- For demonstration purposes only -->
      {{logControls(firstName, lastName, title)}}
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
