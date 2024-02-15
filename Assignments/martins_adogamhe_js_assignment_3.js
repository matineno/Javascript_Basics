'use strict';

// Assignment 3: Practice exercises 

/*
1. The First Bank of Canada recently opened a new ‘so you want to be a millionaire’ 
   savings account. The new account works as follows: the bank doubles the customer’s 
   balance every year until the customer’s balance reaches one million.
    Write a program that reads a starting balance (you can hard code the amount) and then 
    prints the number of years it takes to reach $100,000, and the number of years it takes 
    to reach $1,000,000.
*/

const starting_Balance = 5_000;
const target_1 = 100_000;
const target_2 = 1_000_000;

function numOfYears(balance){
    let current_balance  = balance;
    let count_1 = 0;
    let count_2 = 0;
    while (current_balance < target_2){
    current_balance *= 2;
    if(current_balance >= target_1 && count_1 === 0){
        count_1 = count_2
    }   count_2++
    }

console.log(`It will take ${count_1} years to reach $100,000`)
console.log(`It will take ${count_2} years to reach $1,000,000`);
}


numOfYears(starting_Balance)
console.log();


//  Question 1 answer

const HUMDRED = 100_000;
const MILLION = 1_000_000;
let balance = 10_000;
let years = 0;
let hasHundred = false;
/*
while (balance <= MILLION) {
    if (!hashundred && balance >= HUNDRED) {
        console.log(`It takes ${years} to reach`)
    }
}

*/

/*
 2. Write a program that checks if the sum of diametrically opposite numbers in an array (below)
    is equal to 50. Your output will be:
    40 + 11 = 51 | false 17 + 33 = 50 | true ...
    19 + 27 = 46 | false
    const numbers = [40, 17, 28, 31, 41, 12, 19, 27, 38, 40, 18, 22, 33, 11];
*/

const numbers = [40, 17, 28, 31, 41, 12, 19, 27, 38, 40, 18, 22, 33, 11];
let array = [...numbers];                                                
let new_array = [...array];
let arrayReverse = new_array.reverse();                                   
for (let i = 0; i < array.length / 2; i++) {                                    
let isTrue = false;
    if( array[i] + arrayReverse[i] == 50){
        isTrue = true;
    }
    console.log(`${array[i]} + ${arrayReverse[i]} = ${array[i] + arrayReverse[i]} | ${isTrue}`);
}
console.log();


/*
 3. Write a program that capitalizes the first letter of each sentence in a string. 
    Follow the example below.
    Input: hi. my name is John. i am a programmer. what is your name? 
    Output: Hi. My name is John. I am a programmer. What is your name?
*/

let str = 'hi. my name is John. i am a programmer. what is your name?'; 


function capitalizeStr(input) {
    const array = input.split('. ');
    const capitalizedStr = array.map(array => {
        array = array.trim();
        return array.charAt(0).toUpperCase() + array.slice(1);
    });

    let output = capitalizedStr.join('. ');

    return output;
}
console.log(capitalizeStr(str));
console.log()


/*
4.  A research laboratory needs a computer program to predict the size of a population of 
    organisms. The program should ask for the starting number of organisms, their average 
    daily population increase (as a percentage), and the number of days they will multiply. 
    For example, a population might begin with 2 organisms (the output of the first day), 
    have an average daily increase of 50 percent, and will be allowed to multiply for 7 days. 
    The program should use a loop to display the size of the population for each day:
    Day 1: 2 organisms 
    Day 2: 3 organisms 
    Day 3: 4.5 organisms 
    Day 4: 6.75 organisms ...

    Validation
    1. Do not accept a number less than 2 for the starting size of the population.
    2. Do not accept a negative number for average daily population increase.
    3. Do not accept a number less than 1 for the number of days they will multiply.
*/


function predictSize() {
let startPopulation = 2;
let DailyIncrease = 0.5;
let daysToMultiply = 7;
    while (startPopulation < 2 || isNaN(startPopulation)) {
        console.log('Start population must be 2 or more.');
        break
    }

    while (DailyIncrease < 0 || isNaN(DailyIncrease)) {
        console.log('Average daily increase must be non-negative.');
        break
    }

    while (daysToMultiply < 1 || isNaN(daysToMultiply)) {
        console.log('Number of days to multiply must be 1 or more.');
        break
    }

    
    let population = startPopulation;
    console.log(`Day 1: ${startPopulation} organisms`);
    for (let day = 2; day <= daysToMultiply; day++) {
        population *= (1 + DailyIncrease / 100);
        console.log(`Day ${day}: ${population.toFixed(2)} organisms`);
    }
}

predictSize();
console.log();
/*
 5. Write a function that checks if two arrays contain the same values in the same order. 
 Use arrays with different values and sizes (length) to test your code, and let the user know 
 what went wrong with the comparison.

*/

let array_1 = [3, 3, 8, 4, 4, 7, 3, 6, 3];
let array_2 = [3, 5, 8, 4, 3, 7, 3, 6];


function compare_Arrays(array_1, array_2) {
    if (array_1.length !== array_2.length) {
        return console.log('The arrays have different lengths.');
    }

    for (let i = 0; i < array_1.length; i++) {
        if (array_1[i] !== array_2[i]) {
            console.log(`The arrays are different at index ${i}: ${array_1[i]} !== ${array_2[i]}`);
            return false;
        }
    }

    console.log('The arrays are the same.');
    return true;
}

console.log(compare_Arrays(array_1, array_2)); 

