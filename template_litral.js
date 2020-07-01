'use strict'
let invoiceNum = '1350';

console.log(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350
console.log(`Invoice Number: \${invoiceNum}`); // Invoice Number: ${invoiceNum}
console.log(`Invoice Number: ${'Inv-' + invoiceNum}`); // Inv-1350


function showMessage(message) {
    let invoiceNum = '99';
    console.log(message);
}

// let invoiceNum = '1350';

showMessage(`Invoice number: ${invoiceNum}`); // Invoice number: 1350

function processInvoice(segments) {
    console.log(segments);
}

processInvoice`template`; //['template']

function processInvoice(segments, ...values) {
    console.log(segments);
    console.log(values);
}

let amount = '2000';

processInvoice`Invoice: ${invoiceNum} for ${amount}`;