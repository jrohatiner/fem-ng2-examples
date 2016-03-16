### Local Variables
1. Local variables are declared in a template using a hashtag
2. The most common form is as a handle for each item in an `*ngFor` statement
3. Another use is attaching them to an `input` tag and getting the resulting value from that input whenever it changes

### The elvis operator
1. The elvis operator (`?.`) guards against null and undefined values in property paths within template expressions
2. We use it to define a property path that could be null like so: `{{couldBeNull?.someValue}}`
3. If `couldBeNull` is null, we won't get an error; instead, the value just won't display