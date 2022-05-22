document.addEventListener("DOMContentLoaded", function(event) {
    console.log("ready");
    mutableConst();
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

// some const declared variables are still mutable
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const
// using const declaration only prevents reassignment of variable identifier
function mutableConst() {
    const arr = [5, 7, 9];
    // can mutate the values within the arr
    arr.push(12);

    // cannot directly re-assign arr variable
    // error: arr = [30];

    console.log("Arr: ", arr);

    // can use Object.freeze(objName); to prevent const object from changing
}