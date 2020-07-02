function doAsync() {
    let p = new Promise(function (resolve, reject) {
        console.log('In Promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject();
        }, 2000);
    });

    return p;
}
let promise = doAsync();
// console.log(doAsync());

function doAsync() {
    // return a promise will be rejected
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject();
        }, 1000);
    });

    return p;
}

doAsync().then(function () { console.log('Resolved') }, function () { console.log('Promise rejected.') });

function doAsync() {
    // return a promise will be rejected
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Database error');
        }, 1000);
    });

    return p;
}

doAsync().then(function (value) { console.log('Resolved') }, function (reason) { console.log('Promise rejected. ' + reason) });
doAsync().then(function (value) {
    console.log('Fulfilled ' + value);
    return "For sure!";
}).then(function (value) {
    console.log('really ' + value);
}); //chaining resolve 