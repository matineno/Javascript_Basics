'use strict';

//  *** Global constants  ***
const form = document.querySelector('form');
const temperatureInput = document.querySelector('.input');
const convertButton = document.querySelector('.convert');
const resultDisplay = document.querySelector('.output p');
const modeButton = document.querySelector('.mode-button');
const header = document.querySelector('.mode-button');
const body = document.querySelector('.body');
const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");

//  *** Temperature converter function *** 
convertButton.addEventListener('click', function() {
    const selectedUnit = document.querySelector("input[name='unit']:checked");
    const temperature = parseFloat(temperatureInput.value);
        // *** Simple validation ***
    if (selectedUnit.value === 'Fahrenheit' && !isNaN(temperature)) {
        // *** Convert Celsius to Fahrenheit ***
        const fahrenheit = (temperature * 9/5) + 32;
        resultDisplay.innerText = `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (selectedUnit.value === 'Celsius' && !isNaN(temperature)) {
        // *** Convert Fahrenheit to Celsius ***
        const celsius = (temperature - 32) * 5/9;
        resultDisplay.innerText = `${temperature}°F = ${celsius.toFixed(2)}°C`;
    }  else{
        resultDisplay.innerText = `Enter a valid number`;
    }
});

// *** Dark mode button function ***
let isDark = false;
modeButton.addEventListener('click', function() {
    if (!isDark){
        styleTag.innerHTML = `
        :root {
            --background-dark:  rgb(239, 238, 243);
            --background-light: rgb(24, 23, 31);
            --header-background: rgb(101, 78, 222);
            --font-color-one: rgb(28, 26, 26);
            --font-color-two: rgb(240, 235, 235);
            --action-button-color: rgb(101, 78, 222);
        }
        `;
        headTag.appendChild(styleTag);
        modeButton.value = "Light Mode";
        isDark = true;
    } 
    else{
        styleTag.innerHTML = ``;
        modeButton.value = "Dark Mode";
        isDark = false;
    }
});


