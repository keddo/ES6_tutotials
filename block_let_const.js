'use strict'
function updateProductId() {
    productId = 12; // temporal dead zone
}

let productId = null;
updateProductId();
console.log(productId);

let updateFunctions = [];
for (var i = 0; i < 2; i++) {
    updateFunctions.push(function () { return i });
}
// console.log(updateFunctions);
console.log(updateFunctions[0]()); // output 2

let updateFunctions = [];
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function () { return i });
}
console.log(updateFunctions[0]()); // output 0
