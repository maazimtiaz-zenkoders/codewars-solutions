/*Description:
You're going to provide a needy programmer a utility method that generates an infinite amount of sequential fibonacci numbers.

to do this return an Iterator<BigInt> starting with 1

A fibonacci sequence starts with two 1s. Every element afterwards is the sum of the two previous elements. See:

1, 1, 2, 3, 5, 8, 13, ..., 89, 144, 233, 377, ...*/

/*SOLUTION*/
function fibonacciStreaming(number){
    let result = [];
    let newNum = 0;
    
    for(let i=0;i<number;i++){
        if(i === 0 || i === 1){
            result.push(i);
        }else{
            newNum = result[i-2] + result[i-1];
            result.push(newNum);
        }
    }
    return result;
}
console.log(fibonacciStreaming(10));
/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/55695bc4f75bbaea5100016b*/