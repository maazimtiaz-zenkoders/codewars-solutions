/*DESCRIPTION:
Create a function which checks a number for three different properties.

is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 
The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

numberProperty(-7)  // ==> [false, false, false] 
numberProperty(-10) // ==> [false, true,  true] */

/*SOLUTION*/
function iEvenNum(num){
    let isEven = num % 2 === 0;
    return isEven;
}
function isMultiple(num){
    let isMultiple = num % 10 === 0;
    return isMultiple;
}
function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
    
}
const number = 11;
let even = iEvenNum(number);
let mul = isMultiple(number);
let prm = isPrime(number);
console.log(even,mul,prm);


/*PROBLEM LINK/URL*/

/*https://www.codewars.com/kata/5507309481b8bd3b7e001638*/