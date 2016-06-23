import { Component } from '@angular/core';
import { Code } from './code/code';
import { Observable } from 'rxjs/Rx';

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
      <md-list>
        <md-subheader class="md-no-sticky md-headline">Items</md-subheader>
        <md-list-item class="md-2-line" *ngFor="let item of items">
          <div class="md-list-item-text">
            <h3>{{item.price}}</h3>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  directives: [Code]
})

export class App {
  items: number[] = [];

  constructor() {
    Observable
      .from([{price: 1}, {price: 2}, {price: 3}, {price: 4}, {price: 5}])
      .map(item => {
        return Object.assign({}, item, {price: item.price * 2});
      })
      .subscribe(item => this.items.unshift(item))
      ;
  }
}
