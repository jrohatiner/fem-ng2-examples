import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-form',
  template: `
    <form #personForm="ngForm" (submit)="submitForm(personForm)" novalidate>
      <div ngControlGroup="name" #nameGroup="ngForm">
        <md-input placeholder="First Name" required [(ngModel)]="person.firstName"
                  #firstName="ngForm" ngControl="firstName" type="text"></md-input>
        <md-input placeholder="Last Name" required [(ngModel)]="person.lastName"
                  #lastName="ngForm" ngControl="lastName" type="text"></md-input>
        <br>
        <div class="error" *ngIf="!nameGroup.valid">Please give your first and last name.</div>
      </div>
      <div>
        <md-input placeholder="Password" required minlength="10" [(ngModel)]="person.password"
                  #password="ngForm" ngControl="password" type="password"></md-input>
        <div class="error" *ngIf="password.dirty && !password.valid">
          <span *ngIf="password.errors.required">Please provide a password</span>
        </div>
        <div class="error" *ngIf="password.dirty && !password.valid">
          <div class="error" *ngIf="password.errors.minlength">
            Your password must me at least 10 characters long.</div>
        </div>
      </div>
      <button type="submit" md-button md-raised-button>Submit</button>
      <button [disabled]="!personForm.valid" type="submit" md-button md-raised-button>Disabled unless Valid</button>
    </form>

    <!-- For demonstration purposes only -->
    {{logControls(personForm)}}
  `,
  directives: [ MATERIAL_DIRECTIVES, FORM_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  styles: [`
    .error { color: red; margin-bottom: 10px; }
  `]
})

export class FormComponent {
  person: { firstName: String, lastName: String, title: String } = {
    firstName: 'Luke',
    lastName: 'Ruebbelke',
    password: 'superSecure42'
  };

  logControls(personForm) {
    console.clear();
    console.log(personForm);
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
