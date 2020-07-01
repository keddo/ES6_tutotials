'use strict'
var getProduct = function (productId = 1000) {
    console.log(productId);
}

// getProduct(); //1000

var getProduct = function (productId = 1000, type = 'software') {
    console.log(productId + ' , ' + type);
}

getProduct(undefined, 'Hardware'); // 1000, Hardware

var getTotal = function (price, tax = price * 0.07) {
    console.log(price + tax);
};

getTotal(5.0); // 5.35

var generateBaseTax = _ => 0.07;
var getTotal = function (price, tax = price * generateBaseTax()) {
    console.log(price + tax);
};

getTotal(5.00); // 5.35

var getTotal = function (price, tax = 0.07) {
    console.log(arguments.length);
};

getTotal(5.00); // 1

var getTotal = function (price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
};

getTotal(); //ReferenceError: Cannot access 'adjustment' before initialization

var getTotal = function (price = adjustment, adjustment = 1.00) {
    console.log(price + adjustment);
};

getTotal(5.00) // 6

var getSum = new Function('price=20.00', 'return price;');

console.log(getSum()); //

