'use strict';

const divOne = document.querySelector('.one');
const divTwo = document.querySelector('.two');

const paraOne =document.createElement('p');
const contentOne = document.createTextNode('Hello, world');
paraOne.appendChild(contentOne);
divOne.append(paraOne);

// Using innerHtml (easier ad faster)
let paraTwo = '<p>Check out my latest review</p>';
divTwo.innerHTML = paraTwo;