import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1>I am an app!</h1>`
})

class App {}

bootstrap(App, []);
