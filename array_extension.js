// let salaries = Array(9000); // length = 90000
// let salaries = Array.of(9000); // length = 1
// console.log(salaries.length);

let amount = [800, 810, 820];
// let salaries = Array.from(amount, v => v + 100);
// console.log(salaries);

// let salaries = Array.from(amount, function (v) {
//     return v + this.adjustment;
// }, { adjustment: 50 })

// console.log(salaries);

let salary = [600, 700, 800];
// salary.fill(900);
// salary.fill(900, 1);
// salary.fill(900, 1 /* starting index */, 2 /* stop */);
// console.log(salary);

// let result = salary.find(value => value >= 750);
// console.log(result);

let result = salary.findIndex(function (value, index, array) {
    return value == this;
}, 700);

console.log(result);

salary.copyWithin(2, 0);
console.log(salary) // output: [600, 700, 600]
