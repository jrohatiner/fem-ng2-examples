### Child routes
1. Delineate a "parent" route by adding a trailing slash and elipses
2. Create a route config on the "child" component, with the path being relative to the "parent" path
3. To navigate to a "child" route, list both the "parent" and "child" route names as separate items of the `routerLink` array