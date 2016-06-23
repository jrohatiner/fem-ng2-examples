### Handling Observable Errors
1. `Observable.subscribe` accepts three methods as parameters
2. The first method is the `next` handler that gets fired when the underlying data changes
3. The second method is the `error` handler that gets fired when there is an error in the observable sequence
4. The third method is the `complete` handler that gets fired when the observable sequence is completed
5. We will use `Observable.catch` to recover and continue the observable sequence that is terminated by an exception

### Example
In the example, we create an observable of a simple value, delay the stream for 5 seconds, but throw an error after one second; this will result in the error message being displayed. However, if we uncomment the `.catch` operator, the stream will catch the error and recover, eventually completing.
