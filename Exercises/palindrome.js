// Palindrome
'use strict';
/*
let input = 'hannah';
let reverse = input.split('').reverse().join('');
console.log(input === reverse);
*/
let input = 'Socorram me, subi no onibus em Marrocos';
//  ananaplanacatacanalpanama
let cleanInput = input.replace(/\s+|,\s+/g, '').toLowerCase();
console.log(cleanInput);

let reverse = cleanInput.split('').reverse().join('');

console.log(cleanInput === reverse);