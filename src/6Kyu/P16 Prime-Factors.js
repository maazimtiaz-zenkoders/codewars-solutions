/*Description:
Prime Factors
Inspired by one of Uncle Bob's TDD Kata

Write a function that generates factors for a given number.

The function takes an integer as parameter and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]*/

/*SOLUTION*/
function primeFactors(number) {
  let fact = [];

  if (number < 2) {
    return fact;
  }

  let div = 2;

  while (number > 1) {
    if (number % div === 0) {
      fact.push(div);
      number /= div;
    } else {
      div++;
    }
  }
  return fact;
}
console.log(primeFactors(1));
console.log(primeFactors(3));
console.log(primeFactors(8));
console.log(primeFactors(9));
console.log(primeFactors(12));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/542f3d5fd002f86efc00081a*/
