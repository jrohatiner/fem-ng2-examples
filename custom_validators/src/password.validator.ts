import { Control } from 'angular2/common';

// Uncomment the below code if you want to use the validator as a directive
// import { Directive, provide } from 'angular2/core';
// import { NG_VALIDATORS } from 'angular2/common';
// @Directive({
//   selector: '[passwordValidator]',
//   providers: [provide(NG_VALIDATORS, {useExisting: PasswordValidator, multi: true})]
// })

export class PasswordValidator implements Validator {
  static validate(control: Control) {
  // Uncomment this if you want to use this validator as a directive
  // validate(control: Control) {
  
    // ensure that password has a digit, contains one uppercase letter, and one lowercase letter
    let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

    if (regex.test(control.value)) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
  } 
}