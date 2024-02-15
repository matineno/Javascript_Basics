'use strict';

// Exercise 3
let str = 'My favourite programming languages are javaScript, C# and Java';
let target = str.indexOf('javaScript');
let substring = str. substring (target, target + 10);
let js = substring[0].toUpperCase() + substring.slice(1);
console. log (js);

// Exercise 4
let phrase = 'My name is James Bond';
const words = phrase.split(' '); // split() returns an array

for (let i = words.length - 1; i >= 0; i--) {
    console.log (words[i]);
}
console.log();

// Exercise 5
let fullName = 'Andre Specht de Andrade';
const names = fullName.split(' ');
let numOfLetters = names.join('').length;
console.log(`Your name has ${numOfLetters} letters`);
console.log();

// Exercise 6
// 'Good morning', ' Hello, world', 'Hi, my name
let input = 'Hi, my name is John is Fox';

input = input.trim();
let lastWord = input.substring(input.lastIndexOf(' ') + 1);
console.log(`Last word has ${lastWord.length} characters`);
console.log();




// hannah -- checking if the given word is a paraledium

let reversed = input.split('').reverse().join('');
if (input === reversed);