import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'another-component',
  template: `<h1>another component ({{routeParams.get('queryParam')}})!</h1>`
})

export class AnotherComponent {
  constructor(routeParams: RouteParams) {
    this.routeParams = routeParams;
  }
}