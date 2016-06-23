### Injecting a service into another service
Inject a service into another service by importing it, and declaring a variable in the constructor with the type of the imported service.

> **Note:** don't forget to make it injectable

...
import { Injectable } from '@angular/core';
import { AnotherService } from './services/another.service.ts';

@Injectable()
export class FirstService {
  constructor(service: AnotherService) {
    this.stuff = service.performAction();
  }
}
