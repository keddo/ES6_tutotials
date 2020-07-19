// speak(); // if you uncomment the code it throws error.
// speak();
// speak();

greet();
greet();
greet();

// function declaration
function greet() { // function declaration got hoisted
    console.log("Hello! Good day.")
}

// function expression
const speak = function () { // function expression can't be hoisted
    console.log("Good Day!");
};


