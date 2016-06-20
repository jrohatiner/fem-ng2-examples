import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';

export class AuthGuard implements CanActivate {
  canActivate() {
    let correctPassword = 'p4ssw0rd',
        inputPassword = prompt('Enter a password:', correctPassword);

    return inputPassword === correctPassword;
  }
}

export class DeactivateGuard implements CanDeactivate {
  canDeactivate() {
    return confirm('Are you sure you want to leave?');
  }
}
