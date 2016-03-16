import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
  selector: 'app',
  template: `<h1>I am an app!</h1>`
})

class App {}

bootstrap(App, []);