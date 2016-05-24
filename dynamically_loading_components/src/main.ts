import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, PLATFORM_DIRECTIVES, provide } from '@angular/core';
import { MATERIAL_PROVIDERS } from 'ng2-material';
import { App } from './app';

bootstrap(App, [MATERIAL_PROVIDERS]);