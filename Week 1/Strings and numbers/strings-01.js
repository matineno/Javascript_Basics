'use strict';

/*
Strings and their methods
Strings are immutable
*/

//let str = 'Hello'
//let stc = new String('World');

//console.log(str.length);
//console.log(str.toUpperCase());
//console.log(typeof str);
//console.log(typeof stc);

let fruit = 'banana';

console.log(fruit.indexOf('a', 2));                                // 3
console.log(fruit.lastIndexOf('a'));                               // 5

//Regular expressions (regex)
let text = 'cat, bat, bet, fat, set, batman';
let pattern = /.at/g;

const matches = text.match(pattern);
console.log(matches);                                            // [ 'cat', 'bat', 'fat', 'bat' ]

let keyword = 'Vader';
let phrase = 'Hello. I am Darth Vader, from Star Wars'
console.log(phrase.includes(keyword));                           // true

let person = ' john Smith';
person = person.trim();
person = person.charAt(0).toUpperCase() + person.slice(1);
console.log(person);                                             // John Smith
