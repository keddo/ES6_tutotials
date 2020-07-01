'use strict'
var getPrice = () => 5.99;
console.log(typeof getPrice); // function
console.log(getPrice()); // 5.99

document.addEventListener('click', function () {
    console.log(this); // #document
});

document.addEventListener('click', () => {
    console.log(this); // window -> returns global window object
});

var invoice = {
    number: 123,
    process: function () {
        console.log(this);
    }
};

invoice.process(); // invoice object

var invoice = {
    number: 123,
    process: () => {
        console.log(this);
    }
};

invoice.process(); // global object

var invoice = {
    number: 123,
    process: function () {
        return () => console.log(this.number);
    }
};

// invoice.process()(); // 123

var newInvoice = {
    number: 456
};
// invoice.process().bind(newInvoice)(); // 123
invoice.process().call(newInvoice); // 123

console.log(getPrice.hasOwnProperty('prototype'));



