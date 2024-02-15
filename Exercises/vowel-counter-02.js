'use strict';

// Hashtable

const vowels = {
A: 0, E: 0, I: 0, 0: 0, U: 0,
a: 0, e: 0, i: 0, 0: 0, u: 0
}
let fullName = 'Aaron Earl Johnson';
for (let char of fullName) {
    if (vowels.hasOwnProperty(char)) {
        vowels [char] ++;
    }
}
console. table (vowels) ;