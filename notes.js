document.addEventListener("DOMContentLoaded", function(event) {
    console.log("ready");
    
    destructuringObjectExample();
    destructingArrayExample();
    destructuredFunctionParameter();
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

// destructuring assignment to assign variables from objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects
function destructuringObjectExample() {
    const anObj = {
        firstPlace: {
            firstName: "Sidney",
            lastName: "Star",
            score: 123
        },
        secondPlace: {
            firstName: "Sidney",
            lastName: "Star",
            score: 123
        }
    };

    const { firstPlace: { firstName: name, score }} = anObj;
    console.log(name+" won first place with score: ", score);
}

// destructuring assignment from an array
// difference between destructuring array and spreading an array is:
//      - spreading unpacks the whole
//      - destructuring allows selection of only elements that are to be assigned to a variable
function destructingArrayExample() {
    const arr = [1, 2, 3, 4, 5, 6];
    const [first,, third,, fifth] = arr;
    console.log("first: "+first+", \tthird: "+third+" \tfifth: "+fifth);
}

// passing destructured object directly into a function
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
function destructuredFunctionParameter() {
    const statement = ({name, category}) => "A "+name+" is a "+category;
    console.log(statement(foodItem));
}

const foodItem = {
    name: "banana",
    color: "yellow",
    category: "fruit"
};