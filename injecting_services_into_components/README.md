### Injecting a Service into a Component
We inject a service into a component simply by importing the service, and then creating a reference to it in the constructor of our component, giving it the type of our service.

...
import { MyService } from './services/my.service.ts';
export class MyComponent {
  constructor(service: MyService) {
    this.stuff = service.performAction();
  }
}
