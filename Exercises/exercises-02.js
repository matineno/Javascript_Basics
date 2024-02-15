'use strict';

/*
Exercise 1
 Write a program that obtains minutes and remaining seconds from an 
 amount of time in seconds. Format your results to prevent large 
 decimal places

 Example: 500 seconds contains 8 minutes and 20 seconds
*/

function secondsToMinutes (seconds) {
   return `${seconds} seconds contains ${Math.trunc(seconds / 60)} minute(s) and ${seconds % 60} second(s)`
}

console.log(secondsToMinutes(60));
console.log();

/*
    Exercise 2

    Factorial of a whole number 'n' is defined as the product of that number 
    with every whole number less than or equal to 
*/


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


console.log(factorial(10))
console.log();



/*
    Exercise 3

    A prime number is any interger, or whole number, greater that 1 that is only 
    divisibvle by 1 and itself. In other words, a prime number only has two
    factors, 1 and itself

    To test weather a number is prime, check weather it isdivisible by 2, 3, 4,
    and so on up to number / 2. If a divisor is found, the number is not a prime

    Write a program that displays the first 20 prime nubers
*/


let numberOfPrimes = 20;
let count = 0;
let number = 2;

while(count < numberOfPrimes){
    let isPrime = true;

    for ( let divisor = 2; divisor <= number / 2; divisor++){
        if (number % divisor === 0) {
            isPrime = false;
            break
        }
    }
    if (isPrime) {
        count++
        console.log(number);
    }
    number++
}



