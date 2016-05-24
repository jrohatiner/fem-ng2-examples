import { Component } from '@angular/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'my-component',
  template: `
    <button (click)="service.increment()" md-button md-raised-button>Increment</button>
  `
})

export class MyComponent {
  constructor(service: MyService) {
    this.service = service; // We shouldn't need to do this but it makes the plunk work
  }
}