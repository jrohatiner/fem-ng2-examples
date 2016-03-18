### Handling Observable Errors
1. `Observable.subscribe` accepts three methods as parameters
2. The first method is the `next` handler that gets fired when the underlying data changes
3. The second method is the `error` handler that gets fired when there is an error in the observable sequence
4. The third method is the `complete` handler that gets fired when the observable sequence is completed
5. We will use `Observable.catch` to recover and continue the observable sequence that is terminated by an exception