/*Description:
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084*/

/*SOLUTION*/
function fibonacciEvenSum(number){
    let first = 0;
    let second = 1;
    let sum = 0;
    
    while(second < number){
        if(second % 2 === 0){
            sum += second;
        }
        let temp = first + second;
        first = second;
        second = temp;
    }
    return sum;
}

console.log(fibonacciEvenSum(0));
console.log(fibonacciEvenSum(33));
console.log(fibonacciEvenSum(25997544));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/55688b4e725f41d1e9000065*/
