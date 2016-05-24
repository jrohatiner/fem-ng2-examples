import { Component } from '@angular/core';
import { Code } from './code/code';
import { ReversePipe } from './pipes/reverse.pipe';

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
    <div class="rendered" flex layout="column">
      <div class="md-headline"><strong>Forward</strong>: {{forwardString}}</div>
      <div class="md-headline"><strong>Backward</strong>: {{forwardString | reverse}}</div>
    </div>
  `,
  directives: [Code],
  pipes: [ ReversePipe ]
})

export class App {
  forwardString: String = 'Please turn me around!';
}