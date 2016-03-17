import { Component, ViewEncapsulation } from 'angular2/core';
import { Code } from './code/code';
import { MyComponent } from './components/my.component';
import { AttributesService } from './services/attributes.service';

@Component({
  selector: 'app',
  template: `
    <code-tabs></code-tabs>
    <md-toolbar>
      <div class="md-toolbar-tools">
        <div layout-margin layout layout-align="center">
          <h1>Output</h1>
        </div>
      </div>
    </md-toolbar>
    <div class="rendered" flex layout-fill layout="column">
      <h1 #h1>Introducing...</h1>
      <div class="md-title">Parent h1 attributes:</div>
      <pre><code>{{service.attributes(h1)}}</code></pre>
      <my-component></my-component>
    </div>
  `,
  directives: [Code, MyComponent],
  providers: [ AttributesService ],
  styles: [`
    .rendered h1 {
      color: red !important;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated // Try "Native" and "None" as well
})

export class App {
  constructor(service: AttributesService) { this.service = service; }
}