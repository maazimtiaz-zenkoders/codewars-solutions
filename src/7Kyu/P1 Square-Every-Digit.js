/*Description:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!*/

/*SOLUTION*/
function squareEveryDigit(arr){
    let numStr = arr.toString();
    let result = '';
    
    for(let i=0;i<numStr.length;i++){
        let dig = parseInt(numStr[i]);
        result += (dig * dig).toString();
    }
    return result;
    
}

let num = 9119;
let res = squareEveryDigit(num); 
console.log(res);

/*PROBLEM LINK/URL*/

/*https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript*/