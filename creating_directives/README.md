### Creating a directive
1. Import the `Directive` decorator and the `ElementRef` class
2. Create the directive class and then annotate it with a selector and necessary providers
3. In the directive class, use `ElementRef.nativeElement` to gain access to the DOM element that the directive is applied to
4. Import your directive and add it to the `directives` array on your component
5. Place the selector of your directive on the HTML element you are applying the directive to

> **Warning:** `ElementRef` creates tight coupling between your application and rendering layers which will make it impossible to separate the two and deploy your application into a web worker. Use it only when necessary.
