import { bootstrap } from '@angular/platform-browser-dynamic';
import { MyService } from './services/my.service';
import { App } from './app';

bootstrap(App, [ MyService ]);