'use strict';


/*
    Exercises
    Write a program that gets the average of a group of numbers and finds the 
    numbers above the average. Use array functional methiods (filter(), map(), 
    reducer(), etc.) imstead of 'for' loops

    [4, 7, 24, 9, 17, 34, 6, 22, 19, 13, 5, 40, 3, 28, 39, 11, 1, 37, 25, 36];

        Print the average and the numbers above the average, sorted
*/
/*
const numbers = [
    4, 7, 24, 9, 17, 34, 6, 22, 19, 13, 5, 40, 3, 28, 39, 11, 1, 37, 25, 36
];

let sum = (accumulator, element) => accumulator + element;
let average = total / numbers.length
console.log(`Average: ${average}`)

const condition = num => num > abverage;
const items = numbers.filter(condition);
let numbersAboveAverage = items.sort((a, b) => a - b).join(', ');
console.log(`Numbers above average: ${numbersAboveAverage}`);

*/
/*
    Exercise 2

    Write a program that gets and prints all floating point numbers from the
    following 2D array

    [3, 4.7, 1.3, 5],
    [9, 5.8, 7, 3.9],
    [6, 2.5, 1, 2.4]
*/

const matrix = [
    [3, 4.7, 1.3, 5],
    [9, 5.8, 7, 3.9],
    [6, 2.5, 1, 2.4]
];

const decimals = matrix.flat().filter(num => !Number.isInteger(num));
console.log(decimal);

