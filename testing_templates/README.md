### Testing a Template
1. To run tests in the browser, include the necessary providers and set them as the base providers
2. Import the operators you need for the test, including `TestComponentBuilder`, `ComponentFixture`, and `injectAsync`
3. Import the component whos template you are testing
4. Inside `it` blocks, wrap the normal callback with `injectAsync`, injecting `TestComponentBuilder` as the first argument and passing a method with an instance of `TestComponentBuilder` as the second argument.
5. Return a call to `testComponentBuilderInstance.createAsync`, passing in the component you want to test
6. It returns a promise with a `ComponentFixture` instance
7. Use `.then` to grap the `ComponentFixture` instance and perform expectations on it
