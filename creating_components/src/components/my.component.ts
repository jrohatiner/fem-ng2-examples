import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<h1>my first component!</h1>`
})

export class MyComponent {
  constructor() {
    setTimeout(this.greet, 500);
  }
  
  greet() {
    alert('Welcome to the first component!');
  }
}