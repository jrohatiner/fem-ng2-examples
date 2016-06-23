### Using Http with Promises
1. Simply add a `.toPromise()` operator call on the end of the `Http.get` call to transform the response into a promise
2. It is then chainable with `.then` and `.catch` just like any other promise
