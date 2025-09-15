type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
    let j: number = 0;
    let result: number[] = [];
    for (j; j < arr.length; j++) {
        if (fn(arr[j],j)) {
            result.push(arr[j])
        }
    }
    return result;
}

function plusOne(n:number) { return n + 1 }

console.log(filter([-2,-1,0,1,2], plusOne));
