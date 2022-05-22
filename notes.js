document.addEventListener("DOMContentLoaded", function(event) {
    console.log("ready");
    
    applySpread();
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

// can use spread to copy array
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place
function applySpread() {
    let arr1 = ["asd", "sfsdf", "sdfsdf", "werwe"];
    let copyArr1 = [...arr1];
    console.log("Copy: ", copyArr1);
}