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

import {Component, Injector} from '@angular/core';
import {
  describe,
  ddescribe,
  xdescribe,
  it,
  iit,
  xit,
  expect,
  beforeEach,
  beforeEachProviders,
  inject,
  fakeAsync,
  tick
} from '@angular/core/testing';

import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import { ComponentResolver } from '@angular/core';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import {
  UrlSerializer, DefaultUrlSerializer, RouterOutletMap, Router,
  ActivatedRoute, ROUTER_DIRECTIVES, Params, RouterStateSnapshot,
  ActivatedRouteSnapshot, CanActivate, CanDeactivate, Event,
  NavigationStart, NavigationEnd, NavigationCancel, NavigationError,
  RoutesRecognized, RouterConfig
} from '@angular/router';

import { routes } from './main';

describe('Router tests', () => {
  var location, router;

  beforeEachProviders(() => {
    let config: RouterConfig = routes;

    return [
      RouterOutletMap,
      {provide: UrlSerializer, useClass: DefaultUrlSerializer},
      {provide: Location, useClass: SpyLocation},
      {
        provide: Router,
        useFactory: (resolver:ComponentResolver, urlSerializer:UrlSerializer, outletMap:RouterOutletMap, location:Location, injector:Injector) => {
          const r = new Router(RootCmp, resolver, urlSerializer, outletMap, location, injector, config);
          r.initialNavigation();
          return r;
        },
        deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
      },
      {provide: ActivatedRoute, useFactory: (r:Router) => r.routerState.root, deps: [Router]},
    ];
  });

  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));

  it('should be able to navigate to `my-component`', done => {
    router.navigate(['my-component']).then(() => {
      expect(location.path()).toBe('/my-component');
      done();
    }).catch(e => done.fail(e));
  });

  it('should be able to navigate to `another-component`', done => {
    router.navigate(['another-component']).then(() => {
      expect(location.path()).toBe('/another-component');
      done();
    }).catch(e => done.fail(e));
  });

  it('should navigate to `another-component` by default', done => {
    router.navigateByUrl('/unkown').then(() => {
      expect(location.path()).toBe('/another-component');
      done();
    }).catch(e => done.fail(e));
  });
});

@Component({
  selector: 'root-cmp',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
class RootCmp {}
