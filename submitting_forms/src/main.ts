import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdInputModule } from '@angular2-material/input';
import { App } from './app';

@NgModule({
    imports: [BrowserModule, FormsModule, MdTabsModule, MdInputModule],
    declarations: [App],
    bootstrap: [App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);