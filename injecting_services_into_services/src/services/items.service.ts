import { Injectable } from 'angular2/core';
import { CharacterService } from './character.service';

@Injectable()
export class ItemsService {
  items: Array<{ name: String, description: String}> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];
  
  constructor(private _charService: CharacterService) {
    this._charService = _charService; // This shouldn't need to happen but we kept getting errors when left out
  }
  
  getItems() {
    return this.items;
  }
  
  getTotalCharacters() {
    return this.items.map((item) => {
      return this._charService.countCharacters(item);
    }).join('').split('').length;
  }
}