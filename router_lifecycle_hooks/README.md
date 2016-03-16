### Router Lifecycle Hooks
Import `CanActivate`, `CanDeactivate`, and `ComponentInstruction` from `angular2/router`

#### CanActivate
1. `CanActivate` is a decorator, so we use it like we would the `@Component` decorator
2. Pass in any function that returns a boolean value or returns a promise of a boolean value

#### CanDeactivate
1. `CanDeactivate` is an interface, so we extend it when we create our component class
2. Add `routerCanDeactivate` as a class method, passing in the next route and the previous route as the `ComponentInstruction` type
3. It should also return a boolean or a promise of a boolean





==========