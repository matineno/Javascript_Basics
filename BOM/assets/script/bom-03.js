'use strict';

const pageW = document.querySelector('.page-w');
const pageH = document.querySelector('.page-h');
const cursorX = document.querySelector('.cursor-x');
const cursorY = document.querySelector('.cursor-y');

const readWindow = () => {
    pageW.innerText = `Window width: ${window.innerWidth}px`;
    pageH.innerText = `Window height: ${window.innerHeight}px`;
}

// Using 'readWindow' as a callback function - without ()
window.addEventListener('load', readWindow);
window.addEventListener('resize', readWindow);

//  The event object is provided by the browser automacally,
//  according to the event you use
const readCursor = (event) => {
    cursorX.innerText = `Cursor X: ${event.clientX}`;
    cursorY.innerText = `Cursor Y: ${event.clientX}`;
}

// Callback function don't need parentheses even when they 
// need an argument
document.addEventListener('mousemove', readCursor);