'use strict'

let salary = ['32000', '50000', '70000'];

let [low, average, high] = salary;


console.log(average); // 50000

let salary = ['32000', '50000'];

let [low, average, high] = salary;

console.log(high); // undefined

let salary = ['32000', '50000', '70000'];
let [low, , high] = salary;


console.log(high); // 70000 skip elements with destructuring

let salary = ['32000', '50000', '70000'];
let [low, ...remaining] = salary;


console.log(remaining); // [ '50000', '70000' ]

let salary = ['32000', '50000'];

let [low, average, high = 88000] = salary;

console.log(high); // 88000

let salary = ['32000', '50000', ['88000', '99000']];

let [low, average, [actualLow, actualHigh]] = salary;

console.log(actualLow); // 88000

function reviewSalary([low, average], high = '88000') {
    console.log(high);
}

reviewSalary(['32000', '50000']);

let salary = { low: '32000', average: '50000', high: '88000' };
let newLow, newAverage, newHigh;
({ low: newLow, average: newAverage, high: newHigh } = salary);

console.log(newLow);

let [low, high] = [,];
console.log(`high: ${high} and low: ${low}`); //high: undefined and low: undefined

let [low, high] = undefined;
console.log(`high: ${high} and low: ${low}`); //TypeError: undefined is not iterable

let [low, high] = null;
console.log(`high: ${high} and low: ${low}`); //TypeError: null is not iterable

try {
    let [low, high] = undefined;
} catch (e) {
    console.log(e.name); // Type error
}


for (let [a, b] of [[5, 18]]) {
    console.log(`${a} and ${b}`);
}