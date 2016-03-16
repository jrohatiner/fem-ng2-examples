### Configuring a Route Table
1. Put a `<base href="/">` in your index file, where the href is the root of your application; this tells Angular how to compose navigation URLs
2. Import the `ROUTER_PROVIDERS` from `angular2/router` and bootstrap the app with them
3. Import the  `@RouteConfig` decorator and `ROUTE_DIRECTIVES` from `angular2/router`
4. Decorate the class of the component that imports the components you want to route to with `@RouteConfig`
    * `@RouteConfig` decorator is just a function that takes an array of routes
    * A route generally consists of the `path` to the route, `name` of the route, and the `component` the route navigates to. An optional boolean `useAsDefault` attribute sets a route as the default
7. Add `ROUTE_DIRECTIVES` to the component's directives in its decoration

### Routing Components in the Template
To display the routed components, add a `<router-outlet></router-outlet>` to the template of the component you added the route decoration to.
