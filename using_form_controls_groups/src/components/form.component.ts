import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';
import { MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
  selector: 'my-form',
  template: `
    <form>
      <div ngControlGroup="fullName" #nameGroup="ngForm">
        <md-input-container [class.error]="!firstName.valid">
          <label>First Name</label>
          <input required md-input [(ngModel)]="person.firstName" #firstName="ngForm" ngControl="firstName" type="text">
        </md-input-container>
        <md-input-container [class.error]="!lastName.valid">
          <label>Last Name</label>
          <input required md-input [(ngModel)]="person.lastName" #lastName="ngForm" ngControl="lastName" type="text">
        </md-input-container>
        <br>
        <span class="error" *ngIf="!nameGroup.valid">Please give your first and last name.</span>
      </div>
      <div>
        <md-input-container [class.error]="!password.valid">
          <label>Password</label>
          <input required minlength="10" required md-input [(ngModel)]="person.password" #password="ngForm" ngControl="password" type="password" >
          <div class="error" *ngIf="password.dirty && !password.valid">
            <span *ngIf="password.errors.required">Please provide a password</span>
          </div>
          <div class="error" *ngIf="password.dirty && !password.valid">
            <span class="error" *ngIf="password.errors.minlength">Your password must me at least 10 characters long.</span>
          </div>
        </md-input-container>
        
      </div>
    </form>
    <br>
    <pre>{{person | json}}</pre>
  `,
  directives: [ MATERIAL_DIRECTIVES, FORM_DIRECTIVES ],
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

export class FormComponent {
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    password: 'superSecretOfGreatLength'
  };
}
 
