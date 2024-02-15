'use strict';

const person = {};
person.firstName = 'Thomas';
person.lastname = 'Jones';



const player = {
    firstName: 'Johnny',
    lastName: 'Santos',
    team: 'Destroyers',
    seasons: [2021, 2022, 2023, 2024],
    age: 21

};

console.log(player.hasOwnProperty('team'));         //  true
console.log(player.hasOwnProperty('toString'));     //  false
console.log('team' in player);                      //  true
console.log('toString' in player);                  //  true

console.log(player instanceof Object);              //  true


const user = {};

user['name'] = 'Mary';
user['age'] = 34;
user['email'] = 'mary@email.com';
