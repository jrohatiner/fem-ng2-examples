import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Code } from './code/code';
import { MyComponent } from './components/my.component';

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
      <div>
        <button (click)="increment()" md-raised-button>Increment</button>
      </div>
      <my-component [counter]="counter"></my-component>
    </div>
  `,
  directives: [Code, MyComponent]
})

export class App {
  counter: any = {count: 0, title: 'My Counter'};
  
  increment() {
    this.counter.count++;
    
    // The below code makes MyComponent work with non-default change detection
    // this.counter = Object.assign({}, this.counter, {count: this.counter.count + 1});
  }
}