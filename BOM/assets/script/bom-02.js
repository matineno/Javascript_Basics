'use strict';

const forms = document.querySelector('form');
const input = document.querySelector('.input');
const redOne = document.querySelector('.assign');
const redTwo = document.querySelector('.replace');

window.addEventListener('load', () => {
    input.value = 'http://'
})

redOne.addEventListener('click', () => {
    let val = input.value.trim();
    if (val.length > 8) {
        window.location.assign(val);
    }
});

redTwo.addEventListener('click', () => {
    let val = input.value.trim();
    if (val.length > 8) {
        window.location.replace(val);
    }
});