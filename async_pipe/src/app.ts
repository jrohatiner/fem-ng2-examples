import { Component, COMMON_PIPES } from 'angular2/core';
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
    <div class="rendered" flex layout="column">
      <div class="md-headline">Items:</div>
      <pre>{{asyncItems | async | json}}</pre>
    </div>
  `,
  directives: [Code]
})

export class App {
  private _items: Array<{name: String, description: String} > = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];
  
  asyncItems: Observable<Array<{name: String, description: String}>> 
    = Observable.of(this._items);
}