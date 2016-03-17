import { Component, ViewEncapsulation } from 'angular2/core';
import { AttributesService } from '../services/attributes.service';

@Component({
  selector: 'my-component',
  template: `
    <h1 #h1>my first component!</h1>
    <div class="md-title">Child h1 attributes:</div>
    <pre><code>{{service.attributes(h1)}}</code></pre>
  `,
  styles: [`
    h1 {
      color: green;
    }
  `],
  providers: [ AttributesService ],
  encapsulation: ViewEncapsulation.Emulated // Try "Native" and "None" as well
})

export class MyComponent {
  constructor(service: AttributesService) { this.service = service; }
}