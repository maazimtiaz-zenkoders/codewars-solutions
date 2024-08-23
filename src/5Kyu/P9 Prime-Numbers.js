/*Description:
Preface
A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number

The Problem
You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)
Should return boolean true if prime, otherwise false

getPrimes(start, finish)
Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

Sample Input:
isPrime(number):

isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true 
getPrimes(start, finish):

getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]*/

/*SOLUTION*/
function isPrime(num){
    if(num <= 1) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i < num; i+=2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
function getPrimes(n,m){
    if(n>m){
        let temp = n;
        n=m;
        m=temp;
    }
    let primes = [];
    
    for(let i=n;i<=m;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));

console.log(getPrimes(0, 0));
console.log(getPrimes(0,30));
console.log(getPrimes(30, 0));

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/52dd72494367608ac1000416*/