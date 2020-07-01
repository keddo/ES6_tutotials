'use strict'

var price = 5.99, quantity = 30;

var productView = { price, quantity };

console.log(productView);

//short way of defining a function
var productView = { price, quantity: 10, calculateValue() { return this.price * this.quantity } };
console.log(productView.calculateValue());

var field = "dynamicField";
var price = 5.99;

var productView = { [field]: price };

console.log(productView);

var productView = { [field + "-001"]: price };

console.log(productView);
var method = 'doIt'
var productView = { [method + '-001']() { console.log('in a method') } };
productView['doIt-001'](); // creating dynamic function