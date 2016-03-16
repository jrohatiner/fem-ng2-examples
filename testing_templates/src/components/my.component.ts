import { Component } from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    <h1>{{title}}</h1>
  `
})

export class MyComponent {
  title: String = 'my first component!';
}