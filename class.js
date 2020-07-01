'use strict'
class Task {

}

let task = new Task();
console.log(typeof Task); // function
console.log(typeof task); // object
console.log(task instanceof Task); //true

class Task {

    showId() {
        console.log('99');
    }

}

let task = new Task();
console.log(task.showId === Task.prototype.showId); // true

class Task {
    // let taskId = 55; // // SyntaxError: Unexpected identifier
    constructor() {
        console.log('Constructing task.')
    }
    showId() {
        console.log('99');
    }
}

let task = new Task();

let Task = function () {
    console.log('Constructing task.');
}

let task = {};

Task.call(task); // constructing task


class Task {
    constructor() {
        console.log('constructing a task');
    }
}

let task = {};
Task.call(task); //TypeError: Class constructor Task cannot be invoked without 'new'

