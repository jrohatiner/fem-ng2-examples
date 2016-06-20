import {
  resetBaseTestProviders,
  setBaseTestProviders
} from '@angular/core/testing';

import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

resetBaseTestProviders();
setBaseTestProviders(
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

import {
  describe,
  expect,
  it,
  ComponentFixture,
  inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { MyComponent } from './my.component';

describe('MyComponent template', () => {
  it('should update text', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(MyComponent)
      .then((fixture: ComponentFixture) => {
        const element = fixture.nativeElement;
        fixture.componentInstance.title = 'my epic component!';
        fixture.detectChanges();

        expect(element.querySelectorAll('h1').length).toBe(1);
        expect(element.querySelector('h1').textContent).toBe('my epic component!');
      });
  }));
});
