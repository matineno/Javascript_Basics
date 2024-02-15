'use strict';

const player = {
    firstName: 'Johnny',
    lastName: 'Santos',
    team: 'Destroyers',
    seasons: [2021, 2022, 2023, 2024],
    age: 21

};

console.table(player);

const objKeys = Object.keys(player);
const objValues = Object.values(player);
const objEntries = Object.entries(player);


console.log(objKeys);
console.log(objValues);
console.log(objEntries);

const newDate = new Date();
console.log(newDate);
console.log(newDate instanceof Date);       // true
console.log(newDate instanceof Object);     // true


