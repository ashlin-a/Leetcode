type ReduceFn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: ReduceFn, init: number): number {
    if (nums.length) {
        nums.forEach((x) => {
            init = fn(init, x);
        });
    }

    return init;
}

function sum(accum: number, curr: number) {
    return accum + curr;
}

// console.log(reduce([1, 2, 3, 4], sum, 0));
