import {
  describe,
  it,
  expect,
  beforeEach,
  beforeEachProviders,
  inject
} from 'angular2/testing';

import { provide } from 'angular2/core';
import { SpyLocation } from 'angular2/router/testing';
import { RootRouter } from 'angular2/src/router/router';
import { Router, Location, ROUTER_PRIMARY_COMPONENT, RouteRegistry } from 'angular2/router';

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