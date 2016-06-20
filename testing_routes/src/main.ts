import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { MyComponent } from './components/my.component';
import { AnotherComponent } from './components/another.component';

export const routes = [
  {path: '', component: MyComponent},
  {path: 'my-component', component: MyComponent},
  {path: 'another-component', component: AnotherComponent}
];

bootstrap(App, [ provideRouter(routes) ]);
