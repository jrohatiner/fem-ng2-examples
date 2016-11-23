import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MdTabsModule } from '@angular2-material/tabs';
import { App } from './app';

@NgModule({
    imports: [BrowserModule, MdTabsModule, HttpModule],
    declarations: [App],
    bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);