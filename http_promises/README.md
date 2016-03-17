### Using Http with Promises
1. Simply add a `.toPromise()` operator call on the end of the `Http.get` call to transform the response into a promise
2. The receiving end can then pipe it straight into the `async` pipe (as before) or can chain `.then` methods to handle the promise