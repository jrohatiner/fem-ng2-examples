### Lifecycle Hooks
There are 8 different lifecycle hooks to use on our components:
1. **ngOnChanges** - called when an input or output binding value changes
2. **ngOnInit** - after the first ngOnChanges
3. **ngDoCheck** - developer's custom change detection
4. **ngAfterContentInit** - after component content initialized
5. **ngAfterContentChecked** - after every check of component content
6. **ngAfterViewInit** - after component's view(s) are initialized
7. **ngAfterViewChecked** - after every check of a component's view(s)
8. **ngOnDestroy** - just before the directive is destroyed.

To use them we just declare them as methods on the component class like so:
```ts
export class MyComponent {
  ngOnInit() {
    console.log('Hello World');
  }
}
```

> **Note:** we will never use `ngOnChanges` and `ngDoCheck` at the same time. If we write our own change detection for a component, then we would use `ngDoCheck` and remove `ngOnChanges`.
