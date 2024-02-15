// Counting vowels 

'use strict';

const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
const count = new Array (10). fill(0);
let fullName = 'Aaron Earl Johnson';
console.log(count);

for (let i = 0; i < fullName.length; i++) {
    for (let j = 0; j < vowels. length; j++) {
        if (fullName [i] === vowels [j]) {
            count [j]++; 
        }
    }
}

vowels.forEach((vowel, index) => {
    console.log(`${vowel}: ${count[index]}`);
})


