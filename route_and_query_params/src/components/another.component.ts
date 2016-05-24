import { Component } from '@angular/core';
import { RouteParams } from '@angular/router';

@Component({
  selector: 'another-component',
  template: `<h1>another component ({{routeParams.get('queryParam')}})!</h1>`
})

export class AnotherComponent {
  constructor(routeParams: RouteParams) {
    this.routeParams = routeParams;
  }
}