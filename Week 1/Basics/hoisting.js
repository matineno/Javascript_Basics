/*
    Declaration hoisting

    Hoisting refers to the process whereby the interpreter apperars to move
    the declaration of functions, variables or classes to the top of their
    scope, prior to the execution of the code.

    In other words, we have another reason to not use 'var'
*/

'use strict';

let valid = true;

if (valid){
    //  var hi;
   // console.log(hi); //     undefined // js makes the variable for you even if you don't have it maxde already
   // var hi = 'Hi';
}

if (valid){
   // console.log(hi); //     Cannot access 'hi' before initialization
   // let hi = 'Hi';
}

