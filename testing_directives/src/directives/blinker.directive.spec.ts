import {setBaseTestProviders} from '@angular/testing';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from '@angular/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
                     TEST_BROWSER_APPLICATION_PROVIDERS);

import {
  describe,
  it,
  expect,
  beforeEach,
  TestComponentBuilder,
  ComponentFixture,
  injectAsync
} from '@angular/testing';

import { MockComponent } from './blinker.mock.component';

describe('Directive: femBlinker', () => {
  let fixture;

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    return tcb
      .createAsync(MockComponent)
      .then((f: ComponentFixture) => {
        fixture = f;
      });
  }));
  
  it('should switch from black to red and back every 300ms', done => {
    let element = fixture.nativeElement.querySelector('h1');
    
    setTimeout(() => {
      expect(element.style.color).toBe('red');
    }, 300);
    
    setTimeout(() => {
      expect(element.style.color).toBe('black');
      done();
    }, 600);
  }));
}); 