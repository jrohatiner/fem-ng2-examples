### Custom Validators
#### Creating the validator
1. Create and export a class with a single static method
2. The method should take one parameter of type `Control` and, based on the value of the control, return an object like (`{myValidator: true}`) if there is an error or `null` if there is no error 

#### Using it with the Form Builder
1. Import the validator class into your component
2. Add the validation method of that class to the list of validators on the appropriate control e.g. `[CustomValidator.validationMethod, Validators.required, ...]`

#### Using it as a directive
1. Add a directive annotation to the validator
2. In the directive's providers array, use `provide` to add your custom validator to the default `NG_VALIDATORS` like so: `providers: [provide(NG_VALIDATORS, {useExisting: CustomValidator, multi: true})]`
3. Change the validation method to not be static and make sure it is named `validate`
4. In the component, add the custom validator to the list of component directives
5. Put the validator on the appropriate input in the template, using the selector you defined
