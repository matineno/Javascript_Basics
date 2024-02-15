/* ----------------------------

Strings 

Strings are a data type used to represent text. A 
string is basically a sequence of characters

----------------------------- */

let a = "JavaScript is";
let b = "my favorite"
let c = new String('programming language');

//Character literals
console.log('\'');
comsole.log('\n');
console.log('\\');

let city = 'Winnipeg';
console.log(city.length);

let lastChar = city.length - 1;
console.log(city[city.length - 1]);

let x = true;
let y = 1234;
console.log(x.toString());
console.log(y.toString());

let user = 'James Bond';
let country = 'Canada';
let greeting = 'Hello';

console.log(greeting + ', ' + user + '.Welcome to ' + country);
// Using template string. A more natural way to put strings and variables 
// together
console.log('${greeting}, ${user}, Welcome to ${country}');

let message = '${greeting}, ${user}, Welcome to ${country}';

console.log(message);
