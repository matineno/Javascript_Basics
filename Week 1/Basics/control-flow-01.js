'use strict';

/*
    The break and continue statement provide stricter control flow over the 
    execution of codes in loop

    break exit the loop imediately forcing execution to continue with the 
    next statement after the loop. continue on the other hand causes the
    flow to stop the execution of the current iteration and go on to the next,
    preventing any other instruction from being executed 
*/

const nums = [0, 1, 2, 4, 4, 5];

for (let i = 0; i < nums.length; i++){
    if (nums[i] === 3) {
        console.log(`${nums[i]} and ${i}`);
        break;
    }
}

for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) {
        console.log(nums[i]);
        continue;
        
    }
}

