import { bootstrap } from 'angular2/platform/browser';
import { Component, PLATFORM_DIRECTIVES, provide } from 'angular2/core';
import { MATERIAL_PROVIDERS } from 'ng2-material/all';
import { App } from './app';

bootstrap(App, [MATERIAL_PROVIDERS]);