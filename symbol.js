let eventSymbol = Symbol('resize event');

// console.log(typeof eventSymbol);
// console.log(eventSymbol.toString());

// let s = Symbol('event');
// let s2 = Symbol('event');
// let s2 = s;

let ss = Symbol.for('event');

// console.log(s === s2); // false
console.log(ss.toString()); // symbol(event)

let s = Symbol.for('event');
let s2 = Symbol.for('event');

let des = Symbol.keyFor(s);
console.log(s === s2); // true
console.log(des);

let article = {
    title: 'whiteface mountain',
    [Symbol.for('article')]: 'My article'
};

let value = article[Symbol.for('article')];
console.log(value);

console.log(Object.getOwnPropertyNames(article));
console.log(Object.getOwnPropertySymbols(article));

let Blog = function () {

}
Blog.prototype[Symbol.toStringTag] = "Blog Class";
let blog = new Blog();
console.log(blog.toString());

let values = [2, 45, 49];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));