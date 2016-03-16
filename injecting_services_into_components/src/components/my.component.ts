import { Component } from 'angular2/core';
import { MyService } from '../services/my.service';

@Component({
  selector: 'my-component',
  template: `
    <md-list>
      <md-subheader class="md-no-sticky md-headline">Items</md-subheader>
      <md-list-item class="md-2-line" *ngFor="#item of items">
        <div class="md-list-item-text">
          <h3>{{item.name}}</h3>
          <p>{{item.description}}</p>
        </div>
      </md-list-item>
    </md-list>
  `,
  providers: [ MyService ]
})

export class MyComponent {
  private items: Array<{ name: String, description: String }> = [];
  
  constructor(service: MyService) {
    this.items = service.getItems();
  }
}