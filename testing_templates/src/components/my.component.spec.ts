import {setBaseTestProviders} from 'angular2/testing';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                     TEST_BROWSER_APPLICATION_PROVIDERS);

import {
  describe,
  expect,
  it,
  TestComponentBuilder,
  ComponentFixture,
  injectAsync
} from 'angular2/testing';

import { MyComponent } from './my.component';

describe('MyComponent template', () => {
  it('should update text', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(MyComponent)
      .then((fixture:ComponentFixture) => {
        const element = fixture.nativeElement;
        fixture.componentInstance.title = 'my epic component!';
        fixture.detectChanges();
        
        expect(element.querySelectorAll('h1').length).toBe(1);
        expect(element.querySelector('h1').textContent).toBe('my epic component!');
      });
  }));
});