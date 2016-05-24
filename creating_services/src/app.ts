import { Component } from '@angular/core';
import { Code } from './code/code';
import { MyService } from './services/my.service';

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
      <md-list>
        <md-subheader class="md-no-sticky md-headline">Items</md-subheader>
        <md-list-item class="md-2-line" *ngFor="let item of items">
          <div class="md-list-item-text">
            <h3>{{item.name}}</h3>
            <p>{{item.description}}</p>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  providers: [ MyService ],
  directives: [Code]
})

export class App {
  items: Array<{ name: String, description: String }> = [];

  constructor(private _service: MyService) {
    this.items = _service.getItems();
  }
}
