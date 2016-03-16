### Injecting a service into another service
Inject a service into another service by importing it, and declaring a variable in the constructor with the type of the imported service.

> **Note:** don't forget to make it injectable

```ts
...
import { Injectable } from 'angular2/core';
import { AnotherService } from './services/another.service.ts';

@Injectable()
export class FirstService {
  constructor(service: AnotherService) {
    this.stuff = service.performAction();
  }
}
```

> **Note:** when using the service in a different class method, we should just be able to use it via `this.service`. However, depending on the version of Angular you are using, you may need to set `this.service = service;` explicitly in the constructor.
