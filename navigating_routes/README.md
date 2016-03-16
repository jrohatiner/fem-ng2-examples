### Navigating to a Route in the Template
1. To navigate to a route in the template (we'll use a link as an example), we place a `routerLink` directive on the anchor tag, and we bind an array of parameters to it.
2. These parameters consist of the name we gave the route, as well as any route parameters.

### Navigating to a Route from a Component
1. Import `Router` from `angular2/common` and inject it into the component
2. Call `navigate` on the router instance and pass in the same params you would when navigating from the template.