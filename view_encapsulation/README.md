### View Encapsulation
#### Types of encapsulation
1. **Emulated** – namespaces HTML elements in the template by providing them with attributes unique to that component, and then modifies the css accordingly. This is the default option.
2. **Native** – uses the native encapsulation mechanism of the renderer. For the DOM this means using Shadow DOM and creating a ShadowRoot for Component's Host Element.
3. **None** – doesn't provide any template or style encapsulation. Styles are effectively global.

#### How to use encapsulation
1. Import `ViewEncapsulation` from `@angular/core`
2. Add an `encapsulation` attribute to the component decoration, providing it with one of three options:
    * `ViewEncapsulation.Emulated`
    * `ViewEncapsulation.Native`
    * `ViewEncapsulation.None`
