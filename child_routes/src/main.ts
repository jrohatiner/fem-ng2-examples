import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouteConfig } from '@angular/router';
import { App } from './app';
import { AnotherComponent } from './components/another.component';
import { FirstSubComponent } from './components/child.component';

let routes: RouteConfig = [
  {path: '', component: AnotherComponent},
  {path: 'another-component', component: AnotherComponent, children: [
    {path: 'first', component: FirstSubComponent}
  ]}
];

bootstrap(App, [ provideRouter(routes) ]);
