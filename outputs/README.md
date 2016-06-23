### Emitting Events from a Component

#### Child component
1. Import the `Output` decorator and `EventEmitter` class from `@angular/core`
2. Declare an output as a class attribute with the `@Output()` decorator preceding it and initialize it to a new `EventEmitter`
3. Call `.emit` on the emitter you initialize and pass it the data that you want the parent to receive

#### Parent component
1. Bind to a child component's outputs just as you would a standard event i.e. `<element (childEventName)="parentResponse($event)"></element>`
2. `$event` holds the data that you emitted from the child
