function addNumbers(...args) {
    return args.reduce ((total, num) => total + num, 0);
}

console.log(addNumbers(1, 2, 3, 4));

let arr = [1,2,3.4];
arr = [...arr];
console.log(arr);

function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
}

var total = sum (1, 2, 3, 4);
console.log(total);