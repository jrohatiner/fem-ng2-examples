### Testing a directive
1. Create a mock component and use the directive in that component's template. Make sure to keep the mock component as simple as possible, we are only trying to test the directive.
2. Import the mock component into the spec file
3. Set up the test just like we did for testing a template (import and set base providers, import Jasmine operators, and use `injectAsync` to get a `ComponentFixture` from the `TestComponentBuilder`
4. Perform expectations as you would in template testing. Once we have the fixture, we can use it to gain access to the component instance as well as the component's template

> **Note:** the difference in this test vs. the template test we build is that we are actually injecting the component builder into a `beforeEach` block instead of each individual `it` block. This way we can write code once and get an instance of the component, instead of having to re-write the code each time we want an instance.
