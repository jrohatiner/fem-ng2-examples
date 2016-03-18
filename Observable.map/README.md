### Observable.map
1. `Observable.map` transform the items emitted by an Observable by applying a function to each of them
2. We can use `Observable.map` to transform HTTP responses in the form of `.map(result => result.json())`
3. We can perform simple transformations such as `.map(x => x * 2)` or more complex transformations such as `.map(item => { return Object.assign({}, item, {price:item.price*2}); })`