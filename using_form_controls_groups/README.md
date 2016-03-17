### Leveraging formControls and formGroups
Time to put the template variables to use!
1. Both the local variables on the `ngControl` inputs and the `ngControlGroup` containers contain boolean values such as `valid` and `touched`
2. We can bind a class to the validity of a control (or control group) by using an attribute directive set to `!controlName.valid`
3. We can show/hide error messages by setting `*ngIf` to the same
4. We can keep error messages from showing up immediately by providing `controlName.dirty` as an additional flag to the `*ngIf` statement e.g. 
```html 
<span *ngIf="controlName.dirty && !controlName.valid">Message...</span>
```
5. Angular also places classes on controls based on their state. For example, we could use css to set an input border to red when it has the class `ng-invalid` like so:
```css
input.ng-invalid {
  border-color: red;
}
```
You can use the developer tools in your browser to view all the different classes Angular puts on controls. You can also log the local template variable that contains the instance of your control to the console to see the different flags you can use.