import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<button (click)="greet()" md-button md-raised-button>Greet Me</button>`
})

export class MyComponent {
  @Output() greeter: EventEmitter = new EventEmitter();
  
  greet() {
    this.greeter.emit('Child greeting emitted!');
  }
}