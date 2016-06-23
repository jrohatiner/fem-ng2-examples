### Observable.map
1. `Observable.map` transforms the items emitted by an Observable by applying a function to each of them
2. We can perform simple transformations such as `.map(x => x * 2)` or more complex transformations such as `.map(item => { return Object.assign({}, item, {price:item.price*2}); })`
