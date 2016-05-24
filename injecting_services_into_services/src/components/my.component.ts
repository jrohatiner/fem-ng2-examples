import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CharacterService } from '../services/character.service';

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
  items: Array<{ name: String, description: String }> = [];

  constructor(private _service: ItemsService) {
    this.items = _service.getItems();
    this.characterCount = _service.getTotalCharacters();
  }
}
