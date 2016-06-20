import {
  describe,
  expect,
  it
} from '@angular/core/testing';

import { MyComponent } from './my.component';

describe('My Component', () => {
  it('should be named `MyComponent`', () => {
    expect(MyComponent.name).toBe('MyComponent');
  });

  it('should have a method called `greet`', () => {
    expect(MyComponent.prototype.greet).toBeDefined();
  });

  it('#greet should alert the user', () => {
    let service = new MyComponent();
    spyOn(window, 'alert');
    service.greet();

    expect(window.alert).toHaveBeenCalledWith('Welcome to the first component!');
  });

  it('should set a timeout that calls #greet right away', () => {
    spyOn(window, 'setTimeout');
    let service = new MyComponent();

    expect(window.setTimeout).toHaveBeenCalledWith(MyComponent.prototype.greet, 500);
  });
});
