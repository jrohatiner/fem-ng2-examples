import { Component } from '@angular/core';
import { Code } from './code/code';
import { DominatorDirective } from './directives/dominator.directive';

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
      <div>
        <button (click)="increment()" md-button md-raised-button class="md-warn">
          <span class="md-headline">+</span>
        </button>
        <button (click)="decrement()" md-button md-raised-button class="md-warn">
          <span class="md-headline">-</span>
        </button>
      </div>
      <h1 *dominator="elementCount">Repeat me {{elementCount}} times!</h1>
    </div>
  `
  directives: [Code, DominatorDirective]
})

export class App {
  elementCount: number = 1;

  increment() {
    this.elementCount++;
  }

  decrement() {
    this.elementCount = this.elementCount > 0 ? this.elementCount - 1 : 0;
  }
}
