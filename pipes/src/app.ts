import { Component } from '@angular/core';
import { Code } from './code/code';

interface Item { name: string; description: string; }

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
      <p><strong>Date:</strong> {{today | date}}</p>
      <p><strong>Capitalization:</strong> {{name | uppercase}}</p>
      <p><strong>Replace:</strong> {{name | replace:'Angular':'Fantangular'}}</p>
      <p><strong>Currency:</strong> {{randomNumber | currency:'USD':true}}</p>
      <p><strong>Percent:</strong> {{randomNumber | percent}}</p>
      <p><strong>Decimal:</strong> {{randomNumber | number:'2.0-1'}}</p>
      <pre>{{items | slice:1:2 | json}}</pre>
    </div>
  `,
  directives: [Code]
})

export class App {
  today: Date = new Date();
  name: string = 'Angular 2';
  randomNumber: number = 20.5423;

  items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];
}
