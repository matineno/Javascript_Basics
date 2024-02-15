'use strict';

//Exercises

/*

Question 01
Write a program that checks if a given positive number is multiple of 3 or 
multiple of 7

*/

let number = 28;

if((number % 7 == 0 && number % 3 != 0) && number != 0 ) {
    console.log(`${number} is a multiple of 7`);
}else if((number % 3 == 0 && number % 7 != 0) && number != 0 ) {
    console.log(`${number} is a multiple of 3`);
}else if((number % 3 == 0 && number % 7 == 0) && number != 0 ) {
    console.log(`${number} is a multiple of 7 and 3`);
}
console.log();


/*

Question 02

Create a program to calculate a student's average grade and find the lower
grade. Print the results and use array below

*/

const grades = [87, 92, 78, 93, 89, 96, 91];
let lowestGrade = grades[0];
let sumofGrades = 0;

for( let i = 0; i < grades.length; i++){
    sumofGrades += grades[i];
    if (grades[i] < lowestGrade){
        lowestGrade = grades[i]
    }
}
console.log(`Average grades is ${sumofGrades/grades.length} and lowestGrade is ${lowestGrade}`);

console.log();


/*

Question 03

Write a program that copies the word 'javaScript' from a string,
capitalizes its first letter and prints the result. Use string methods

Input: 'My favorite programming languages are javaScript, C# and Java'

for loop to look in input
statement to check for the string Javascript
variable to store the data while checking 
and print the data

*/
let str = 'My favourite programing language argnm ,. e javaScript, C# and Java';
let string = str.indexOf('favourite');
let subString = str.substring(string, string + 9);
console.log(subString);
/*
let userInput = 'My favorite programming languages are javaScript, C# and Java';
let checkWord = 'Javascript';
let userOutput = '';
for(let i = 0; i < checkWord.length; i++){
    for(let j = 0; j < userInput.length; j++){
        if(userInput[j].toLowerCase === checkWord[i].toLowerCase){
            userOutput += checkWord[i];
            break
        }
    }
}
console.log(userOutput);
*/
console.log();

/*

Question 04

Write a program that prints a sequence of words in reverse order. Use a 'for' 
loop to display the words
  
'My name is James Bond' -> 'Bond James is name My'

*/

let word = 'My name is James Bond'; //-> 'Bond James is name My
let myWord = word.split(' ');

for(let i = myWord.length - 1; i >= 0; i--){
    console.log(myWord[i]);
}
console.log();

