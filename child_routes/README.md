### Child routes
1. Add child routes to a parent by creating a `children` attribute on the parent route and setting it to an array of "child" routes
2. To navigate to a "child" route, list both the "parent" and "child" route names as separate items of the `routerLink` array
3. Display the associated component of child routes by inserting a `<router-outlet></router-outlet>` directive into the parent component
