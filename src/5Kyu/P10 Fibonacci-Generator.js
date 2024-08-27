/*Description:
Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2*/

/*SOLUTION*/
function genfib() {
  let first = 0;
  let second = 1;

  return function fib() {
    let current = first;

    let nextNum = first + second;
    first = second;
    second = nextNum;

    return current;
  };
}
var fib = genfib();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/522498c9906b0cfcb40001fc*/
