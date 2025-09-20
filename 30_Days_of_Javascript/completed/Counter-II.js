"use strict";
function createCounter(init) {
    const original = init;
    let n = original;
    return {
        increment() {
            return ++n;
        },
        decrement() {
            return --n;
        },
        reset() {
            n = original;
            return n;
        },
    };
}
// const counter = createCounter(5)
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
