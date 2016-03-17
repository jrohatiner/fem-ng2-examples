### Http with Headers
1. Import `Headers` from `angular2/http`
2. To create headers, create a new instance of the `Headers` class, passing in an object with header names/values
3. To pass headers into an HTTP call, wrap the instance of headers in an object with a key of `headers`
4. Pass this new object as the last parameter to your HTTP request method