'use strict';

/*
    Getting access to HTML elements

    Methods available in the 'document' object
    -getElementById()
    -querySelector()
    -querySelectorAll()
*/

const sectionById = document.getElementById('section');

// querySelector() allows us to target elements by their names, id's and 
// classes. This method is more flexible that 'getElementById()'
const sectionByClass = document.querySelection('section')
console.log(section);