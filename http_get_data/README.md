### Using Http to Get Data
1. Import `Http` from `@angular/http` and inject into the constructor (either the service or component)
2. The `Http` provider contains methods for the standard REST actions, so we call `Http.get` and pass in a path
3. `Http` returns observables for its methods, so we can use `RxJS` operators to massage the data. In this case, we are calling `map` and transforming the response to JSON
4. Since it is an observable, the result can be subscribed to
