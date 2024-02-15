/*
Assignment 2: Practice exercises
*/

/*  Question 1  
    Anthony bought 300 shares of stock at a price of $21.75 per share. 
    He must pay his stockbroker a 2 percent commission for the transaction. 
    Write a JavaScript program that calculates and prints the following:
    a) The amount paid for the stock alone (without the commission). 
    b) The amount of the commission.
    c) The total amount paid (for the stock plus the commission).
*/

let shares = 300;
let unitPrice = 21.75;
let percent = 2;

function amountPaid(shares, unitPrice) {
    return shares * unitPrice
}
console.log(amountPaid(shares, unitPrice));                     // 6525

function commission(percent) {
    return amountPaid(shares, unitPrice) * (percent/100);
}
console.log(commission(percent));                               // 130.5

let totalAmount = amountPaid(shares, unitPrice) + commission(percent);
console.log(totalAmount);                                       // 6655.5
console.log();

/*
    Question 2

    Write a program that converts Celsius to Fahrenheit and Fahrenheit to Celsius. 
    Format your results to prevent large decimal places. 
    Example: 23.0 Celsius is 73.4 Fahrenheit 73.4 Fahrenheit is 23.0 Celsius
*/

const Fahrenheit = 32;
function convertToF(num) {
    return Math.ceil((num * 9/5) + Fahrenheit)
}


function convertToCelsius(num) {
    return Math.ceil((num * Fahrenheit) * (5/9));
}

console.log(convertToF(25));                                       // 77
console.log(convertToCelsius(25));                                 // 445


/*
    Question 3
Write a program that finds the largest value from three values:
let a = 3, b = 7, c = 12;
*/

let a = 3;
let b = 7;
let c = 12;

highestValue = Math.max(a, b, c);
console.log(highestValue);                                          // 12


/*
    Question 4

Write a program that prints a message to a student based on their final grade (don’t use if). 
Your program should work as follows:
grade == ‘A’, print ‘Well done’
grade == ‘B’, print ‘That’s fine’
grade == ‘C’, print ‘You passed, but we are not happy’ grade == ‘D’, print ‘Bye-bye course’
grade == ‘F’, print ‘Rest in peace’
*/

// Student's final grade
let grade = 'C';                                                    // You passed, but we are not happy

// Switch case to print messages based on the grade
switch (grade) {
  case 'A':
    console.log('Well done');
    break;
  case 'B':
    console.log("That's fine");
    break;
  case 'C':
    console.log('You passed, but we are not happy');
    break;
  case 'D':
    console.log('Bye-bye course');
    break;
  case 'F':
    console.log('Rest in peace');
    break;
  default:
    console.log('Invalid grade');
}


/*
    Question 5

    Write a program that prints all odd numbers from 1 to 50 (one number per line).

*/

for (let i = 1; i <= 50; i = i + 2) {
    console.log(i);
}