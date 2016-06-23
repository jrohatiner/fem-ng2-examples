import { Component, DynamicComponentLoader, Injector, OnInit } from '@angular/core';
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
      <div id="child"></div>
    </div>
  `,
  directives: [Code]
})

export class App implements OnInit {
  constructor(private dcl: DynamicComponentLoader, private injector: Injector) {
    this.injector = injector;
    this.dcl = dcl;
  }

  ngOnInit() {
    this.dcl.loadAsRoot(MyComponent, '#child', this.injector);
  }
}
