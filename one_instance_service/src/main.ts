import { bootstrap } from 'angular2/platform/browser';
import { MyService } from './services/my.service';
import { App } from './app';

bootstrap(App, [ MyService ]);