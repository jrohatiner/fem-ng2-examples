### Creating a Structural Directive
1. Import `TemplateRef`, `ViewContainerRef` from `@angular/core`
2. Inject them in the constructor of your directive
3. `TemplateRef` represents an Embedded Template that can be used to instantiate Embedded Views
4. `ViewContainerRef` represents a container where one or more Views can be attached
5. To create an embedded element, call `viewContainerInstance.createEmbeddedView` and pass in an instance of `TemplateRef`
6. To clear out the view, call `viewContainerInstance.clear`
