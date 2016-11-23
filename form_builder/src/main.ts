import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdInputModule } from '@angular2-material/input';
import { App } from './app';

@NgModule({
    imports: [BrowserModule, MdTabsModule, MdInputModule, ReactiveFormsModule],
    declarations: [App],
    bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);