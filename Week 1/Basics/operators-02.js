'use strict';

//lofical operators: && (AND), || (OR) and ! (NOT)
let valid = true;
let ok = false;
let a = 10;
let b = 5;

console.log(valid && ok);     // false
console.log(valid || ok);     // true
console.log(a > 0 && a > b);  // true
console.log(b > a || b > 0); // true

if (ok){

    console.log('It is true');
} else {
    console.log('It is false')
}

let brand = 'Apple';
console.log(brand.toUpperCase());  // APPLE
console.log(brand);               // Apple

brand = brand.toUpperCase();

// Relational operators
console.log(a > b);
console.log(b < a);
console.log(a >= 10);
console.log(b <= 5);

console.log('234' < '3');  // true

// The identivcally equal operator
// == loose qruallity
console.log(10 == '10');  // true
console.log(10 === '10'); // false
console.log(10 == 1);   // true
console.log(10 === 1);  // false

