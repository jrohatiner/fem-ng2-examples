import { Component } from '@angular/core';
import { RouteParams } from '@angular/router';

@Component({
  selector: 'my-component',
  template: `<h1>my component ({{routeParams.get('id')}})!</h1>`
})

export class MyComponent {
  constructor(routeParams: RouteParams) {
    this.routeParams = routeParams;
  }
}