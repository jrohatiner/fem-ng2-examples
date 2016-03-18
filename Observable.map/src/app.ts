import { Component } from 'angular2/core';
import { Code } from './code/code';
import { Observable } from 'rxjs/Rx';
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
        <md-list-item class="md-2-line" *ngFor="#item of items">
          <div class="md-list-item-text">
            <h3>{{item.price}}</h3>
          </div>
        </md-list-item>
      </md-list>
    </div>
  `,
  providers: [ MyService ],
  directives: [Code]
})

export class App {
  items: Number[] = [];
  // items: Observable<Array<any>> // With async
  items$: Observable<Array<any>>;
  
  constructor(myService: MyService) {
    // This works wish async
    // this.items = myService.getItems();

    // This does NOT work with async
    // this.items = Observable
    //   .fromArray([{price:1}, {price:2}, {price:3}, {price:4}, {price:5}])
    //   .map(item => {
    //     return Object.assign({}, item, {price:item.price*2});
    //   })
    //   ;
    
    // This does NOT work with async
    this.items$ = Observable
      .fromArray([{price:1}, {price:2}, {price:3}, {price:4}, {price:5}])
      .map(item => {
        return Object.assign({}, item, {price:item.price*2});
      })
      .subscribe(item => this.items.unshift(item))
      ;
      
    // This does NOT work with async      
    // this.items$ = Observable
    //   .interval(500 /* ms */)
    //   .take(10)
    //   .map(x => x * 2)
    //   .filter(x => x > 10 )
    //   .subscribe(item => this.items.unshift(item))
    //   ;
  }
}