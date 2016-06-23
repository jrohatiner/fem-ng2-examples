import { Injectable } from '@angular/core';
import { CharacterService } from './character.service';
import { Item } from './item';

@Injectable()
export class ItemsService {
  items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];

  constructor(private charService: CharacterService) {}

  getItems() {
    return this.items;
  }

  getTotalCharacters() {
    return this.items.map((item) => {
      return this.charService.countCharacters(item);
    }).join('').split('').length;
  }
}
