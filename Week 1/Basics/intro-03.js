/* ----------------------------

Constant and Data types

A Constant ('const') behaves identically to that of 
variable but with one important difference. It must be
intiallize with a value and that value cannot be 
redefined after declaration.

JavaScript is not a strongly typed language. Its types 
are dynmaic  (you can literally change the type of your 
variable)

JavaScript has 8 basic data types: Number, Boolean,
String, BigInt, undefined, null, Symbol and Object

----------------------------- */

const ID = 398490;
const COLLEGE = 'MITT';
const USER_ID = 8903;

// Error: assignment to constant variable
// USER_ID = 223828


// We don't use the SNAKE_UPPERCASE convention with objects 
// We can change the conent of objects. We are not suppose
// change the object itself

const user = {};
user.name = 'John Smith';
user.address = '123 Notre Dame Ave';

user.name = 'Mary Johnson';
console.log(user.name);

//An array (of numbers - integers)
const list = [4,6, 8, 2, 9, 0, 3];
console.log(list[4]);


let a = 123;
let b = 45.789;
let c = 1239887783778373n;  //  BigInt
let d = false;
let e = null;
let f = 'Hello';
let g = Infinity;


console.log(a + ' | ' + typeof a);
console.log(b + ' | ' + typeof b);
console.log(c + ' | ' + typeof c);
console.log(d + ' | ' + typeof d);
console.log(e + ' | ' + typeof e);
console.log(f + ' | ' + typeof f);

console.log(0)