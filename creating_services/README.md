### Creating a Service
1. A service is just a class
2. The service's API is defined by it's class methods
3. Import the service into the component and add it to the `providers` array of the target component
4. To access it in the component class, provide a variable in the constructor whose type is the service
5. To access the service outside of the constructor, simply reference it as `this.service`

### Hierarchical Injectors
For simplicity's sake, we will assume that every component gets its own injector. When a component requests a dependency, Angular searches through the parent injectors until it finds the dependency it needs. However, we can provide different instances of a service to different components. This is handy if, for instance, you wanted several components to be in an `edit` state and you don't want them all to be calling on the same service instance.