import { Component, DynamicComponentLoader, ElementRef } from 'angular2/core';
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
    <div class="rendered" flex layout-fill layout>
      <h1>Introducing...</h1>
      <div #loadFormHere></div>
    </div>
  `,
  directives: [Code]
})

export class App {
  constructor(dcl: DynamicComponentLoader, element: ElementRef) {
    this.element = element;
    this.dcl = dcl;
  }
  
  ngOnInit() {
    this.dcl.loadIntoLocation(MyComponent, this.element, 'loadFormHere');
  }
}