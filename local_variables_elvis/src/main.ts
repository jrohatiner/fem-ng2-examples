import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdInputModule } from '@angular2-material/input';
import { BrowserModule} from '@angular/platform-browser';
import { MdTabsModule } from '@angular2-material/tabs';
import { App } from './app';

@NgModule({
    imports: [BrowserModule, MdTabsModule, MdInputModule, FormsModule],
    declarations: [App],
    bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);