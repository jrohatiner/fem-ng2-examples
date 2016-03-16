### Setting up Angular 2 Tests
1. Include the Jasmine CSS and JS files
2. Include the Angular 2 `testing.dev.ts`
3. We combine multiple imports into `Promise.all`, then call `window.onload`

> **Note:** we are importing all of our specs manually. If we wanted to, we could configure the tests like the app itself and just import all test modules into one parent test file.

> **Note:** the jasmine html reporter usually shows up at the bottom of the page, but we did some simple JS wizardry to get it at the top of the page.