// Advanced:
// Check presence of the function parameters. Throw an Error when 
// function square() is called without arguments.
// To do this, create a new function, and use it as default parameter.


"use strict";


function square(a) {
    if (!isNaN(a)) {
        console.log(a * a);
    } else {
        console.log("Not numbers.")
    }
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires an argument!
