import {
  describe,
  it,
  expect
} from '@angular/testing';

import { MyService } from './my.service';

describe('MyService', () => {
  it('should be named `MyService`', () => {
    expect(MyService.name).toBe('MyService');
  });
  
  it('should have an array of 3 items', () => {
    let service = new MyService();
    
    expect(service._items).toBeDefined();
    expect(service._items.length).toBe(3);
  });
  
  it('#getItems should return an array of 3 items', () => {
    let service = new MyService(),
        items = service.getItems();
        
    expect(Array.isArray(items)).toBeTruthy();
    expect(items.length).toBe(3);
  })
});