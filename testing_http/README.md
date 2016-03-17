### Testing Http Calls
1. In a `beforeEachProviders` block, we need to provide `HTTP_PROVIDERS`, the service under test, and most importantly, provide the `MockBackend` instead of the `XHRBackend`
2. In a `beforeEach` block, we subscribe to all connections and return a mock response for each one
3. Finally, we can call the `Http` method (or call the service method that calls the `Http` method), subscribe to it, and perform our expectations