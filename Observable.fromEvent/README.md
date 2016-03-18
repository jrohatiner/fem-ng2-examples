### Observable.fromEvent
1. We can subscribe to DOM events using `Observable.fromEvent`
2. Inject `ElementRef` to gain a reference to the element that the component is bound to
3. Use `elementRef.nativeElement` to access the DOM element we want to subscribe to
4. Once we are subscribed to a DOM event, we can compose our observable streams to suit our needs
