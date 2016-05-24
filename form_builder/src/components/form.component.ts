import { Component } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, Validators } from '@angular/common';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-form',
  template: `
    <form [ngFormModel]="personForm" (submit)="submitForm(personForm)" novalidate>
      <div ngControlGroup="nameGroup" #nameGroup="ngForm">
        <label>First Name</label>
        <input ngControl="firstName" type="text">
        <br><br>
        
        <label>Last Name</label>
        <input #lastName="ngForm" ngControl="lastName" type="text">
        <br>
        <span class="error" *ngIf="!nameGroup.valid">Please give your first and last name.</span>
      </div>
      <br>
      <div>
          <label>Password</label>
          <input #password="ngForm" ngControl="password" type="password" >
          <div class="error" *ngIf="password.dirty && !password.valid">
            <span *ngIf="password.errors.required">Please provide a password</span>
          </div>
          <div class="error" *ngIf="password.dirty && !password.valid">
            <span class="error" *ngIf="password.errors.minlength">Your password must me at least 10 characters long.</span>
          </div>
      </div>
      <br>
      <button type="submit" md-button md-raised-button>Submit</button>
      <button [disabled]="!personForm.valid" type="submit" md-button md-raised-button>Disabled unless Valid</button>
    </form>
    <br>
    <pre>{{person | json}}</pre>
  `,
  directives: [ MATERIAL_DIRECTIVES, FORM_DIRECTIVES ],
  styles: [`
    md-input-container:not(.md-input-invalid).md-input-focused .md-input {
      border-color: #2196F3
    }
    
    md-input-container:not(.md-input-invalid).md-input-focused label {
      color: #2196F3;
    }
    
    .error { color: red; }
    
    input.ng-invalid {
      color: red;
      outline-color: red;
      border-color: red;
    }
  `]
})

export class FormComponent {
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    password: 'UpperLower123'
  };
  
  constructor(private _builder: FormBuilder) {
    this.personForm = _builder.group({
      nameGroup: _builder.group({
        firstName: [this.person.firstName, Validators.required],
        lastName: [this.person.lastName, Validators.required]
      }),
      password: [this.person.password, Validators.compose([Validators.required, Validators.minLength(10) ])]
    });
  }
  
  submitForm(form) {
    if (form.valid) {
      alert(`
        Person info:
        Name: ${this.person.firstName} ${this.person.lastName}
        Password: ${this.person.password}
      `)
    } else {
      alert('Please resolve the errors in the form');
    }
  }
}