### Dynamically Loading Components

1. Import `DynamicComponentLoader` and `Injector` and inject them into the parent component
2. Import the component that will be dynamically loaded
3. Insert an element with an ID into the parent component's template
4. In the parent component class, call `DynamicComponentLoader.loadAsRoot`, passing in the child component, id selector, and injector, respectively
