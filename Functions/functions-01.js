/*
    Tntro to functions

    A function is basically a block of statements that performs a task or
    calculates a value. Functions can return values and invoke other functions

*/

'use strict';

// Basic parameterless function
function greetings(){
    console.log('Hi, I am a function');
}

greetings();

console.log();
//  Function with 1 parameter
function greetingUser(user){
    console.log(`Welcome, ${user}`);
}

let userOne = 'John Smith';
let userTwo = 'Mary Helen'
// userOne and userTwo are  argument
greetingUser(userOne);
greetingUser(userTwo);
console.log();

// Function with 2 parameters
function divideNumbers(a, b){
    let c = 0;
    if(b !== 0){
        c = a/b;
        console.log(c);
    }else{
        console.log(`b can\'t be (zero)`);
    }
}

divideNumbers(10, 5);
divideNumbers(10, 0);
divideNumbers(15, 3);

console.log();
// Creste single-parameter function (name)
// The function will print your full name if name === your name
// else your name Doe


function printFullName(firstName) {
    let lastName = firstName === 'Andre' ? 'Specht' : 'Doe';
    console.log(`${firstName} ${lastName}`)
/*
    if(inputname === fullName){
        console.log(`Your full name is ${inputname}`);
    }else{
        console.log('Your name Doe');
    }
*/
}

printFullName('Andre');
printFullName('John');

