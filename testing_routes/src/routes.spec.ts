import {
  describe,
  it,
  expect,
  beforeEach,
  beforeEachProviders,
  inject
} from '@angular/testing';

import { provide } from '@angular/core';
import { SpyLocation } from '@angular/router/testing';
import { RootRouter } from '@angular/src/router/router';
import { Router, Location, ROUTER_PRIMARY_COMPONENT, RouteRegistry } from '@angular/router';

import { App } from './app';

describe('Router tests', () => {
  var location, router;
  
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, { useClass: SpyLocation }),
    provide(ROUTER_PRIMARY_COMPONENT, { useValue: App }),
    provide(Router, {useClass: RootRouter})
  ]);
  
  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));
  
  it('should be able to navigate to `MyComponent`', done => {    
    router.navigate(['MyComponent']).then(() => {
      expect(location.path()).toBe('/my-component');
      done();
    }).catch(e => done.fail(e));
  });

  it('should be able to navigate to `AnotherComponent`', done => {
    router.navigate(['AnotherComponent']).then(() => {
      expect(location.path()).toBe('/another-component');
      done();
    }).catch(e => done.fail(e));
  });
  
  it('should navigate to `AnotherComponent` by default', done => {
    router.navigateByUrl('/unkown').then(() => {
      expect(location.path()).toBe('/another-component');
      done();
    }).catch(e => done.fail(e));
  });
});