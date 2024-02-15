'use strict';

/*
    Loops

    A repitition control structure excutes one or more instructions
    multiole times in succession

    The while loop: checks a condition anjd exceutes instructions
    The do-while loop: exceute instructions at least once and then checks the condition

    The for loop 
*/

let x = 0;
let valid = true;

while (valid) {
    x++;
    if (x === 5){
        valid = false;
    }
}

console.log(x);

let y = 0;

do {
    console.log(y);
} while (y > 0);


const numbers = [4, 7, 2, 8, 0, 9];

for (let i = 0; i < numbers.length; i++) {
    console.log(`Index: ${i}, Value: ${numbers[i]}`);
}