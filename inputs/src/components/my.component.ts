import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    <div class="md-headline">Greeting from parent:</div>
    <div class="md-title">{{greeting}}</div>
  `
})

export class MyComponent {
  @Input() greeting: string = 'Default Greeting';
}
