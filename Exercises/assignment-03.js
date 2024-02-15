'use strict';

let organisms = 2;
let increase = 0.5;
let days = 7;
let result = 0;

if (organisms >= 2 && increase >= 0 && days >= 1) {
    console.log(`Day 1: ${organisms} organisms`);

    for (let i = 2; i <= days; i++){
        result = organisms + (organisms * increase);
        console.log(`Day ${i}: ${result.toFixed(2)} orgamisms`)
    }
}

