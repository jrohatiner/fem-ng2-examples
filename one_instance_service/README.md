### One Instance of a Service
When multiple components register a particular service with their providers, they get separate instances of the service. Sometimes that is undesirable because we want to share the same state among the components. An easy way to do this is to provide the service when you bootstrap the app.

`bootstrap(App, [ MyService ]);`
