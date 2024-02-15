/*
    Switch statement

    The switch statement is a complex decision-making structure in which a
    single value is evaluated and flow is redirected to the first matching 
    branch, know as a case statement
*/

let city = 'Toronto';

switch(city) {
    case 'Winnipeg':
        console.log('You live in ' + city);
        break;
    case 'Vancouver':
        console.log('You dont live in the required city, You live in ' + city);
        break;
    case 'Toronto':
        console.log('You dont live in the required city, You live in ' + city);
        break;
    case 'Ottawa':
        console.log('You dont live in the required city, You live in ' + city);
        break;
    case 'Saskatoon':
        console.log('You dont live in the required city, You live in ' + city);
        break;
    default:
        console.log('City not found');
}
