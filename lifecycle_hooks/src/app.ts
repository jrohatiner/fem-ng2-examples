import { Component, Input } from 'angular2/core';
import { MyComponent } from './components/my.component';
import { Code } from './code/code';

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
    <div class="rendered" layout-fill>
      <button (click)="increment()" md-button md-raised-button class="md-secondary">Increment</button>
      <button (click)="toggleMyComponent()" md-button md-raised-button class="md-secondary">Toggle My Component</button>
      <my-component *ngIf="showMyComponent" [counter]="counter"></my-component>
    </div>
  `,
  directives: [ Code, MyComponent ]
})

export class App {
  private counter: Integer = 0;
  private showMyComponent: Boolean = true;
  
  increment() {
    this.counter++;
  }
  
  toggleMyComponent() {
    this.showMyComponent = !this.showMyComponent;
  }
}