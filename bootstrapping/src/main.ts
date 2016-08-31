import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app',
  template: `<h1>I am an app!</h1>`
})

class App {}

@NgModule({
  imports: [BrowserModule],
  declarations: [App],
  bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);