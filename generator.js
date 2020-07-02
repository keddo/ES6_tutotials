//the asterisk shows that the function is generator.
// function* process() {
//     yield 100;
//     yield 200;
// }

// let it = process();
// it.next();
// it.next();
// console.log(it.next());

// function* process() {
//     let nextId = 700;
//     while (true) {
//         yield (nextId++);
//     }
// }

// let it = process();
// it.next();
// console.log(it.next().value);

// for (id of process()) {
//     if (id > 702) break;
//     console.log(id);
// }

function* process() {
    let result = yield;
    console.log(`result is: ${result}`);
}

let it = process();
it.next(); // kick start the generator
it.next(200)
// console.log(it.next(200));