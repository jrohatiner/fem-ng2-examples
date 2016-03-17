### Submitting a Form
1. We DO NOT need to add an `ngControl` or `ngControlGroup` to a form, Angular provides that functionality by default
2. We DO still need to add a local template variable for the form and set it to the `ngForm` directive
3. We use event binding to bind to the native `submit` event and pass in the form instance to our method
4. Inside our submission method, we can use the same boolean values as the other controls and control groups to perform different actions based on the state of the entire form
5. As a bonus, we can disable submission until the entire form is valid. We do this by binding a button's `disabled` attribute to `!localFormVariable.valid`.