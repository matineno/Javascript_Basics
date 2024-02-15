/*
Exercise 3
Write a program that checks if a string (use the example below) is a 

palindrome. A palindrome is a word, phrase, or sequence that reads the same 

backward as forward

Your code must remove commas and white spaces before starting the comparison,

as well as ignore the case of the letters
 
'A man, a plan, a cat, a canal, Panama' -> 'amanaplanacatacanalpanama'
*/

let input = 'A man, a plan, a cat, a canal, Panama';
let str = input.trim(', ');

console.log(str);
