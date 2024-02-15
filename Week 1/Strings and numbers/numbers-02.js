/*
    Formatting numbers

    In ECMAScript, primitive data types have access to built-in functions
    through a concept known as 'object wrappers'. When you attempt to call a
    method on a primitive value, ES automatically converts the primitive to its 
    corresponding object wrapper type

    String, Number, Boolean
*/

'use strict';

let num = 124.0055;
let float = 0.000345;

//  toFixed(): formats a number using a fixed-point notation
console.log(num.toFixed(2));              // 124.01
console.log(typeof num.toFixed(2), '\n'); // string

//  toPrecision(): returns a string represinting the number of the specified
//  precision, an integer specifying the number of significant digits
console.log(num.toPrecision(3));              // 124.01
console.log(float.toPrecision(2));            // 0.00034
console.log();

// Math.floor(); rounds a number down to the next smallest integer
console.log(Math.floor(num));                 // 124
console.log(Math.floor(float));               // 0
console.log();

// Math.ceil(); rounds a number up to the next largest integer
console.log(Math.ceil(num));                 // 125
console.log(Math.ceil(float));               // 1
console.log();

// Math.trunc(); returns the integer part of a number by removing any 
// fractional digits
console.log(Math.trunc(0.1));                // 0
console.log(Math.trunc(4.58));               // 4
console.log(Math.trunc(13.897));             // 13
console.log();

// Number.IsInteger(); determins weather the passed value is integer
console.log(Number.isInteger(num));          //  false
console.log(Number.isInteger(15));           //  true

console.log();

console.log(0.1 + 0.2 === 0.3);                                   // false
console.log(Number((0.1 + 0.2).toPrecision(1)) === 0.3);          // true
console.log(parseFloat((0.1 + 0.2).toPrecision(1)) === 0.3);      // true


