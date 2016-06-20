import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { MyComponent } from './components/my.component';
import { AnotherComponent } from './components/another.component';
import { App } from './app';

let routes = [
  {path: '', component: MyComponent},
  {path: 'my-component', component: MyComponent},
  {path: 'another-component', component: AnotherComponent}
];

bootstrap(App, [ provideRouter(routes) ]);
