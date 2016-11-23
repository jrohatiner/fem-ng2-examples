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
        <div #nameGroup="ngModelGroup" ngModelGroup="nameGroup">
          <md-input placeholder="First Name" required [(ngModel)]="person.firstName"
                    ngControl="firstName" type="text" name="firstName"></md-input>
          <md-input placeholder="Last Name" required [(ngModel)]="person.lastName"
                    ngControl="lastName" type="text" name="lastName"></md-input>
        </div>
        <div>
          <md-input placeholder="Title" [(ngModel)]="person.title"
                    ngControl="title" type="text" name="title"></md-input>
        </div>
      </form>
      <br>
      <pre>{{person | json}}</pre>

      <!-- For demonstration purposes only -->
      {{logControls(nameGroup)}}
    </div>
  `,
  directives: [ Code],
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

  logControls(nameGroup) {
    console.clear();
    if (nameGroup.value) {
      console.log('GROUP: ', nameGroup);
      console.log('GROUP CONTROLS: ', nameGroup.control.controls);
      console.log('GROUP VALUE: ', nameGroup.value);
    }
  }
}
