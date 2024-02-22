'use strict';

const forms = document.querySelector('form');
const input = document.querySelector('.input');
const redOne = document.querySelector('.assign');
const redTwo = document.querySelector('.replace');
const copy = document.querySelector('.copy');

window.addEventListener('load', () => {
    input.value = ''
})

redOne.addEventListener('click', () => {
    let val = input.value.trim();
    let search = `https://www.google.com/search?q=${val}`;
     window.location.assign(search);
});

redTwo.addEventListener('click', () => {
    let val = input.value.trim();
    let search = `https://www.bing.com/search?q=${val}`;
    window.location.assign(search);
});

copy.addEventListener('click', () => {
    let val = input.value.trim();
    if (val.length > 0) {
        input.select();
        navigator.clipboard.writeText(val)
    }
});