/*Description:
Create a function or callable object that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. The function should also return "Even" or "Odd" when accessing a value at an integer index.

For example:

evenOrOdd(2); //'Even'
evenOrOdd[2]; //'Even'
evenOrOdd(7); //'Odd'
evenOrOdd[7]; //'Odd'*/

/*SOLUTION*/
function evenOrOdd(number){
    if(number % 2 === 0){
        return 'EVEN';
    }else{
        return 'ODD';
    }
}
let num = prompt("Enter a Number:");
evenOrOdd[num] = evenOrOdd(num);
console.log(evenOrOdd(num));
console.log(evenOrOdd[num]);

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/6656a4687f3e4eb5fb520817*/
