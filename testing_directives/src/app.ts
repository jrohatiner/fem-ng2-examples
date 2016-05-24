import { Component } from '@angular/core';
import { Code } from './code/code';
import { FemBlinkerDirective } from './directives/blinker.directive';

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
    <div class="rendered" flex layout>
      <h1 femBlinker>Blink for 10 seconds please!</h1>
    </div>
  `,
  styles: [`
    h1 {
      transition: color 300ms linear;
    }
  `],
  directives: [Code, FemBlinkerDirective]
})

export class App {}