'use strict';

const btn = document.querySelector('.btn');
const body = document.querySelector('body');

function getColor() {
    let colorNum = Math.floor(Math.random() * 256);
    return colorNum;
}

// Remenber; 1 function, 1 job
function rgbBuilder(){
    let rgb = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    return rgb;
}

btn.addEventListener('click', () => {
    body.style.backgroundColor = rgbBuilder();
})