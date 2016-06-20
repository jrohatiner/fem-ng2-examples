import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { AuthGuard, DeactivateGuard } from './guard';
import { MyComponent } from './components/my.component';
import { AnotherComponent } from './components/another.component';
import { App } from './app';

let routes = [
  {path: '', component: MyComponent, canActivate: [AuthGuard]},
  {path: 'my-component', component: MyComponent, canActivate: [AuthGuard]},
  {path: 'another-component', component: AnotherComponent, canDeactivate: [DeactivateGuard]}
];

bootstrap(App, [ AuthGuard, DeactivateGuard, provideRouter(routes) ]);
