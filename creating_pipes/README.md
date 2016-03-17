### Creating a Pipe
1. Import the `Pipe` decorator from `angular2/core`
2. Decorate the pipe with a name
3. Create a class that implements `PipeTransform` and has one method called `transform`
4. The `transform` function takes a value and an array of other arguments, and always returns a value