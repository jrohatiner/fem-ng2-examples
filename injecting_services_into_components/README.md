### Injecting a Service into a Component
We inject a service into a component simply by importing the service, and then creating a reference to it in the constructor of our component, giving it the type of our service.

```ts
...
import { MyService } from './services/my.service.ts';
export class MyComponent {
  constructor(service: MyService) {
    this.stuff = service.performAction();
  }
}
```

> **Note:** when using the service in a different class method, we should just be able to use it via `this.service`. However, depending on the version of Angular you are using, you may need to set `this.service = service;` explicitly in the constructor.