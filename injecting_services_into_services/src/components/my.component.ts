import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CharacterService } from '../services/character.service';
import { Item } from '../services/item';

@Component({
  selector: 'my-component',
  template: `
    <md-list>
      <md-subheader class="md-no-sticky md-headline">Items</md-subheader>
      <p>Character count: <strong>{{characterCount}}</strong></p>
      <md-list-item class="md-2-line" *ngFor="let item of items">
        <div class="md-list-item-text">
          <h3>{{item.name}}</h3>
          <p>{{item.description}}</p>
        </div>
      </md-list-item>
    </md-list>
  `,
  providers: [ ItemsService, CharacterService ]
})

export class MyComponent {
  items: Array<Item> = [];

  constructor(private service: ItemsService) {
    this.items = service.getItems();
    this.characterCount = service.getTotalCharacters();
  }
}
