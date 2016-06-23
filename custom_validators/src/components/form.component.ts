import { Component, OnInit } from '@angular/core';
import {
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MATERIAL_DIRECTIVES } from 'ng2-material';
import { PasswordValidator } from '../password.validator';

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
          <!--<span class="error" *ngIf="!nameGroup.valid">Please give your first and last name.</span>-->
        </div>
        <br>
        <div>
            <label>Password</label>
            <input formControlName="password" type="password" >
            <div class="md-caption">
              Please include a number, an uppercase letter, and a lowercase letter
            </div>
            <!--<div class="error" *ngIf="password.dirty && !password.valid">
              <span *ngIf="password.errors.required">Please provide a password</span>
            </div>
            <div class="error" *ngIf="password.dirty && !password.valid">
              <span class="error" *ngIf="password.errors.minlength">
                Your password must me at least 10 characters long.
              </span>
            </div>-->
        </div>
        <br>
        <button type="submit" md-button md-raised-button>Submit</button>
        <!--<button [disabled]="!personForm.valid" type="submit" md-button md-raised-button>
          Disabled unless Valid
        </button>-->
      </form>
  `,
  directives: [ MATERIAL_DIRECTIVES, REACTIVE_FORM_DIRECTIVES ],
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

export class FormComponent implements OnInit {
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    password: 'UpperLower123'
  };

  personForm: FormBuilder;

  constructor(private _builder: FormBuilder) {}

  ngOnInit() {
    this.personForm = this._builder.group({
      nameGroup: this._builder.group({
        firstName: [this.person.firstName, Validators.required],
        lastName: [this.person.lastName, Validators.required]
      }),
      password: [
        this.person.password,
        [
          PasswordValidator.validate,
          Validators.required,
          Validators.minLength(10)
        ]
      ]
    });
  }

  submitForm() {
    console.log(this.personForm)
    if (this.personForm.valid) {
      alert(`
        Person info:
        Name: ${this.person.firstName} ${this.person.lastName}
        Password: ${this.person.password}
      `);
    } else {
      alert('Please resolve the errors in the form');
    }
  }
}
