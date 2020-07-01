let a = {
    x: 1
}

let b = {
    y: 2
}

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, a);
console.log(a.x, a.y);
console.log(b.y);

let a = { a: 1 }, b = { a: 5, b: 2 };

Object.defineProperty(b, 'c', {
    value: 10,
    enumerable: false
});

let target = {};
// target = b;
Object.assign(target, a, b);

console.log(target);

let amount = NaN;
console.log(amount === amount); // false
console.log(Object.is(amount, amount)); // true


