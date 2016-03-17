### Get State from a Group of Inputs
Defining a control group is just like defining a control:
1. Import `FORM_DIRECTIVES`
2. Add an `ngControlGroup` attribute to an ancestor HTML element of the inputs you want to group
3. Give it a name that aptly describes the group
4. Create local template variable, setting it to `ngForm` to tap into the control group you just defined