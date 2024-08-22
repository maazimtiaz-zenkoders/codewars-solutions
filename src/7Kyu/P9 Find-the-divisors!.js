/*Description:
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"*/

/*SOLUTION*/
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i < num; i+=2){
        if(num % i === 0){
            return false
        }
    }
    return true;
}
function divisors(num){
    if(num <= 1){
        console.log("Number Must be Greater than 1");
    }
    if(isPrime(num)){
        console.log(`${num} is a Prime Number`);
    }
    let res = [];
    for(let i=2;i<num;i++){
        if(num % i === 0){
            res.push(i);
        }
    }
    return res;
}
console.log(divisors(12));
console.log(divisors(25));
console.log(divisors(13));

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/544aed4c4a30184e960010f4*/