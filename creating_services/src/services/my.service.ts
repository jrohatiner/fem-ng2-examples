import { Item } from './items';

export class MyService {
  private items: Array<Item> = [
    { name: 'Item 1', description: 'Epic item!' },
    { name: 'Item 2', description: 'As great as the first!' },
    { name: 'Last One', description: 'A round of applause for this one' }
  ];

  getItems() {
    return this.items;
  }
}
