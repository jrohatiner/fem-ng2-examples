### Local Variables
1. Local variables are declared in a template using a hashtag
2. We then have instant access to the element it was declared on

### The Safe Navigation Operator
1. The binary operator (`?.`) guards against null and undefined values in property paths within template expressions
2. We use it to define a property path that could be null like so: `{{couldBeNull?.someValue}}`
3. If `couldBeNull` is null, we won't get an error; instead, the value just won't display
