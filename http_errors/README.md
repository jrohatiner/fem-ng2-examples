### Http Error Handling
1. Import the `Observable` function from `RxJS`
2. Add a `.catch` operator to the end of the observable sequence, passing it a function that takes an error

> **Note:** we just logged the error to the console for now, in reality you would probably want to push it to a remote server or something of that sort
