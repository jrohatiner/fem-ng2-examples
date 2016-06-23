import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter, RouteConfig } from '@angular/router';
import { App } from './app';
import { MyComponent } from './components/my.component';
import { AnotherComponent } from './components/another.component';

let routes: RouteConfig = [
  {path: '', component: MyComponent},
  {path: 'my-component', component: MyComponent},
  {path: 'another-component', component: AnotherComponent}
];

bootstrap(App, [ provideRouter(routes) ]);
