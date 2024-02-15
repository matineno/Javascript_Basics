'use strict';

const pet = {
    name: 'domestic cat',
    species: 'felis catus',
    class: 'mammalia',
    order: 'carnivore'
};

function deleteProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)){
    delete obj[prop];
    } else {
        console.log('Property dosen\'t exit');
    }
}

deleteProperty(pet, 'order');
// console.table(pet);

//  What if you weant to make your object immutable?
const student = {
    id: 1123,
    name: 'Tom Steve',
    age: 17
};

Object.freeze(student);
//  Now, all properties are 'read-only'
//  console.log(student);

if (!Object.isFrozen(student)) {
    student.age = 19;
} else {
    console.log('Object is frozen');
}