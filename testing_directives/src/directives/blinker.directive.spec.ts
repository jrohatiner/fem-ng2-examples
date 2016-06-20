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
  it,
  expect,
  beforeEach,
  beforeEachProviders,
  inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';
import { MockComponent } from './blinker.mock.component';

describe('Directive: femBlinker', () => {
  let fixture;

  beforeEachProviders(() => [
    TestComponentBuilder
  ]);

  beforeEach(inject([TestComponentBuilder], tcb => {
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
  });
});
