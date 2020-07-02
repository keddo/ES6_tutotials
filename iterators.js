let ids = [100, 200, 300];
// console.log(typeof ids[Symbol.iterator]); // function
let it = ids[Symbol.iterator]();

// it.next();
// it.next();
// it.next();
console.log(it.next().value);

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 800;
        return {
            next() {
                let value = nextId > 802 ? undefined : nextId++;
                let done = !value;
                return { value, done }
            }
        }
    }
}

let itr = idMaker[Symbol.iterator]();
console.log(itr.next())
console.log(itr.next().value)

for (v of idMaker) {
    console.log(v);
}