### Using Http to Get Data
1. Import `Http` from `@angular/http` and inject into the constructor (either the service or component)
2. Import `RxJS`
3. The `Http` provider contains methods for the standard REST actions, so we call `httpInstance.get` and pass in a path
4. `Http` returns observables for its methods, so we can use `RxJS` operators to massage the data. In this case, we are calling `map` and transforming the response to JSON
5. Since it is an observable, the result can either be subscribed to (in which case we bind the component data in the subscribe block) or we can use the `async` pipe to place the observable directly in the template and let Angular take care of the subscribing for us