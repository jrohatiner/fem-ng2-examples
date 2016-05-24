// 2. Import dependencies, Angular 2 or your own
import { Component } from '@angular/core';

// 3. Decorate the component class
@Component({
  selector: 'my-component',
  template: `<h1>my first component!</h1>`
})

// 1. Create the component class
export class MyComponent {

  // 4. Enhance the component class with functionality
  constructor() {
    setTimeout(this.greet, 500);
  }
  
  greet() {
    alert('Welcome to the first component!');
  }
}