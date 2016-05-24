### Creating a Structural Directive
1. Import `TemplateRef`, `ViewContainerRef` from `@angular/core`
2. Inject them in the constructor of your directive
3. `TemplateRef` contains a reference to the host element's template
4. `ViewContainer` contains methods to modify the host element's template
5. To create an embedded element, call `viewContainerInstance.createEmbeddedView` and pass in an instance of `TemplateRef`
6. To clear out the view, call `viewContainerInstance.clear`
