"use strict";
function filter(arr, fn) {
    let j = 0;
    let result = [];
    for (j; j < arr.length; j++) {
        if (fn(arr[j], j)) {
            result.push(arr[j]);
        }
    }
    return result;
}
function plusOne(n) { return n + 1; }
console.log(filter([-2, -1, 0, 1, 2], plusOne));
