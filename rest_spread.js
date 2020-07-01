'use strict'

var showCategories = function (proudctId, ...categories) {
    console.log(categories instanceof Array);
};

showCategories(123, 'search', 'advertising'); // true

var showCategories = function (proudctId, ...categories) {
    console.log(categories);
};
showCategories(123, 'search', 'advertising'); // ['search', 'advertising']

var showCategories = function (proudctId, ...categories) {
    console.log(categories);
};
showCategories(123); // []

var showCategories = function (proudctId, ...categories) {
    // console.log(categories);
};
console.log(showCategories.length); // 1

var showCategories = function (proudctId, ...categories) {
    console.log(arguments.length);
};
showCategories(123, 'search', 'advertising'); // 3

var showCategories = new Function('...categories', 'return categories;'); // dynamic function

console.log(showCategories('search', 'advertising')); // ['search', 'advertising']
