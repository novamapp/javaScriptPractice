document.addEventListener("DOMContentLoaded", function(event) {
    console.log("ready");

    checkScope();
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

// var vs let scope
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords
function checkScope() {
    let i = 'function scope';
    if(true) {
        let i = 'block scope';
        console.log('i scope == ', i);
    }
    console.log('i scope == ', i);
    return i;
}