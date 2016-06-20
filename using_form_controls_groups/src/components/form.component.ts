import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MATERIAL_DIRECTIVES } from 'ng2-material';

@Component({
  selector: 'my-form',
  template: `
    <form>
      <div ngControlGroup="fullName" #nameGroup="ngForm">
        <md-input placeholder="First Name" required [(ngModel)]="person.firstName"
                  #firstName="ngForm" ngControl="firstName" type="text"></md-input>
        <md-input placeholder="Last Name" required [(ngModel)]="person.lastName"
                  #lastName="ngForm" ngControl="lastName" type="text"></md-input>
        <br>
        <div class="error" *ngIf="!nameGroup.valid">Please give your first and last name.</div>
      </div>
      <div>
        <md-input placeholder="Password" required minlength="10" required [(ngModel)]="person.password"
                  #password="ngForm" ngControl="password" type="password"></md-input>
        <div class="error" *ngIf="password.dirty && !password.valid">
          <span *ngIf="password.errors.required">Please provide a password</span>
        </div>
        <div class="error" *ngIf="password.dirty && !password.valid">
          <span class="error" *ngIf="password.errors.minlength">Your password must me at least 10 characters long.</span>
        </div>
      </div>
    </form>
    <br>
    <pre>{{person | json}}</pre>
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
    password: 'superSecretOfGreatLength'
  };
}
