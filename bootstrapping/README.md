### Bootstrap an Angular 2 App
1. Import `@NgModule`, `BrowserModule`, and `platformBrowserDynamic` and your app
2. Create an empty module for your app
3. Decorate the module by providing the `BrowserModule` as an import, declaring all your components, and specifying which component to bootstrap the app with
4. Invoke `platformBrowserDynamic` and then call its `bootstrapModule` method, passing in the decorated module