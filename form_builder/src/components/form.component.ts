import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-form',
  template: `
    <form [formGroup]="personForm" (submit)="submitForm(personForm)" novalidate>
      <div formGroupName="nameGroup">
        <label>First Name</label>
        <input formControlName="firstName" type="text">
        <br><br>
        
        <label>Last Name</label>
        <input formControlName="lastName" type="text">
        <br>
        <span class="error" *ngIf="!personForm.get('nameGroup').valid">Please give your first and last name.</span>
      </div>
      <br>
      <div>
          <label>Password</label>
          <input formControlName="password" type="password" >
          <div class="error" *ngIf="personForm.get('password').dirty && !personForm.get('password').valid">
            <span *ngIf="personForm.get('password').errors.required">Please provide a password</span>
            <span *ngIf="personForm.get('password').errors.minlength">Your password must me at least 10 characters long.</span>
          </div>
      </div>
      <br>
      <button type="submit" md-button md-raised-button>Submit</button>
      <button [disabled]="!personForm.valid" type="submit" md-button md-raised-button>Disabled unless Valid</button>
    </form>
    <br>
    <pre>{{person | json}}</pre>
  `,
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
  person: { firstName: string, lastName: string, password: string } = {
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