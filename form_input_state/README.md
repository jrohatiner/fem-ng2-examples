### Getting an Input's State
1. Import `FORM_DIRECTIVES` from `@angular/common` and add them to your component's directives array
2. Add an `ngControl` attribute to your input elements. The value you give them is arbitrary, you will use it to reference that input's attributes.
3. Add a local template variable to the input and set it to `ngForm`. This is NOT arbitrary. This actually sets the local variable to the instance of the `ngForm` directive that pertains to the `ngControl` you just defined.