function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let modified_arr: number[] = [];
    let j: number = 0;
    for (j; j < arr.length; j++) {
        modified_arr.push(fn(arr[j], j));
    }
    return modified_arr;
}

// function plusI(n: number, i: number) { return n + i; }
// function constant() { return 42; }

// const sam = [1, 3, 4, 2];
// console.log(map(sam, constant));
