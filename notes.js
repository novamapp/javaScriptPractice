document.addEventListener("DOMContentLoaded", function(event) {
    console.log("ready");
    
    printTimes(3);
    console.log(addNums(3, 6));
    console.log(addToN(3));
    console.log(addToN(9, 3));
});

/*
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

- ECMAScript (ES) is a standardized version of JS.
- All major browsers follow this spec so ES == JS.
- ES5 was finalized in 2009
- ES6 was released in 2015
- ES6 includes new features:
        - arrow functions
        - destructuring
        - classes
        - promises
        - and modules

var: global, unless defined in a function, then it is local
let: like var, excepted can be scoped to: block, statement, or expression

*/

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions
// can use arrow functions in place of anonymous functions
const afunc = () => {
    console.log("This is an arrow function");
}

// single parameter for arrow function
const printTimes = times => {
    for(let i=0; i<times; i++) afunc();
}

// more than one parameter for arrow function
const addNums = (num1, num2) => num1+" + "+num2+" = "+(num1 + num2);

// arrow function with default parameter
// the default parameters must be later in the list of parameters
const addToN = (n, inc=0) => n+" + "+inc+" = "+(n+inc);