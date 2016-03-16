### Testing Routes
This will just cover the tests in a high-level sense.

1. Use a `beforeEachProviders` block to register and mock out router dependencies
2. Use a `beforeEach` block with `inject` to provide the `Router` and `Location` to our tests
3. Import all of the dependencies we used in the test setup
4. Import the `app` component so we can test the routes on it
5. Perform expectations