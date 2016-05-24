import { Component } from '@angular/core';
import { Code } from './code/code';
import { MyService, Item } from './services/my.service';

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
        <md-list-item class="md-2-line" *ngFor="let item of items | async">
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
  items: Observable<Array<Item>>;

  constructor(private _service: MyService) {}

  ngOnInit() {
    this.items = this._service.getItems();
  }
}
