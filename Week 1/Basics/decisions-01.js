'use strict';

/*   
Decision-making statements (if, switch)

    The if statement will execute one group of statements if its expression 
    is true/truthy, or another group if it expression is false/falsy. The
    else block is optional 
*/

let a = 10;
let b = 5;
let c = a;

if (a > 0){
    console.log('a is positive');
}

if (b > a){
    console.log('b is greater that a');
    }else{
        console.log('a is greater that b');
}

if (a > c){
    console.log('a is greater that c');
    }else if (c > a){
        console.log('c is greater that a');
    }else{
        console.log('a and c are equal');
    }

    let city = 'Vancouver';
    // create a swquence of if-else statement to check if city is Winnipeg
    // Available cities: Vancouver, Toronto, Saskatoon, Ottawa
    // Print 'You live in [city]'

    if(city === 'Winnipeg'){
        console.log('You live in ' + city);
    } else if(city === 'Vancouver'){
            console.log('You dont live in the required city, You live in ' + city);
    } else if(city === 'Toronto'){
            console.log('You dont live in the required city, You live in ' + city);
    } else if(city === 'Saskatoon'){
            console.log('You dont live in the required city, You live in ' + city);
    } else if(city === 'Ottawa'){
            console.log('You dont live in the required city, You live in ' + city);
    } else{
            console.log('You don\'t live in Canada');
    }

    /*
        The cndition operator / ternary operator is a simple if-else statement
        You can write one line of code instead of 4 or 5
    */

    let age = 15;
    let status = age > 15 ? 'You can drive' : 'You can\'t drive';
    console.log(status);


    let x = 9;
    let y = 4;

    if (++x == 10 )