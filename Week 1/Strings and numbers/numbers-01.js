';costsLessThanTenuse strict';

// Use this to make long numbers readable
const MILLION = 1_000_000;
const BILLION = 1_000_000_000;

console.log(MILLION);               // 1000000
console.log(BILLION);               // 1000000000

// isNAN() - Global function
console.log(isNaN(15));             //false
console.log(isNaN('10'));           //false, this is coerced to 10
console.log(isNaN(true));           //false(1)
console.log(isNaN(false));          //false(0)
console.log(isNaN('Hi'));           //true
console.log(isNaN(' '));            //false
console.log(isNaN(''));             //false
console.log(isNaN('NaN'));          //true


let a = true;
let b = '123';
let c = 456.78;
let d = null;
let e = '';

console.log(Number(a));                     //1
console.log(Number(b));                     //123
console.log(Number(c));                     //456.789
console.log(Number(d));                     //0
console.log(Number(e));                     //0

console.log();

console.log(parseInt(a));                   // NaN
console.log(parseInt(b));                   // 123
console.log(parseInt(c));                   // 456.789
console.log(parseInt(d));                   // NaN
console.log(parseInt(e));                   // Nan

console.log();

let str = '4.5 stars';                     
console.log(Number(str));                   // NaN
console.log(parseInt(str));                 // 4
console.log(parseFloat(str));               // 4.5

console.log(10 / Infinity);                 // 0

