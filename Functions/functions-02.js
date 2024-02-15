/*
Function with return values
*/

'use strict';

function power(num) {
    let result = num ** num;
    return result;
}

let pow = power(5);
console.log(pow);                                            //  3125

function isValid(num) {
    if (Number.isInteger(num) && num > 12)return true;
    return false;
}

if (isValid(13)) {
    console.log('Age is valid');                            //  Age is valid
} else {
    console.log('Age is not valid');
}

function isEven(num){
    return num % 2 === 0;
}

function isPositive(num){
    return num > 0;
}

let userInput = 14;
if (isPositive(userInput) && isEven(userInput)) {
    console.log('Valid input');                             //     //  Valid Input
} else {
    console.log('Invalid input');
}

console.log();

// Write a function that returns the season according to a temp
// temp > 15;  'Spring/Summer'
// temp > 5 && temp < 15: 'Fall"
// temp < 5: 'Winter'


function getSeason(temp) {
    if (temp > 15){
        return 'Its Spring/Summer';
    } else if (temp > 5 && temp <= 15){
        return "Its Fall";
    } return 'Its Winter';
}

console.log(getSeason(24));                                         //  Spring/Summer
console.log(getSeason(16));                                         //  Spring/Summer
console.log(getSeason(15));                                         //  Fall 
console.log(getSeason(10));                                         //  Fall
console.log(getSeason(5));                                          //  Winter
