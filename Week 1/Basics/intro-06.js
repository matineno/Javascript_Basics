'use strict';

/* ----------------------------

Variable scope: 'var vs let'
'let' is block scoped
'var' is only function scoped

So, Dont use 'var'
----------------------------- */

let a = 5;

function print()

if (a > 0) {
    let b = 7;
    console.log(a + b);
}

// 'b' is not defined
// 'b' is in its own small scope
console.log(b);

function add(a,b){
    let c = a + b;
    console.log(c);
}

add(2, 8);

let valid = true;

