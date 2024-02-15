/*
    Creating functions
*/

'use strict';
// Functions are typically defined using function-declaration syntax
function getAverage(a, b, c) {
    return (a + b + c) / 3;
}

console.log(getAverage(14, 19, 27));                    //  20
console.log();

//  Functions can be created by a function sepression. Such a function
//  can be anonymous
const square = function(number) {
    return number * number;
};

//  More about arrow function later
const printArray = function (array) {
    array.ForEach(element => console.log(element));
}

function recursion(n) {
    if (n > 0) {
        console.log(n);
        recursion(n - 1);
    }
}

recursion(4);