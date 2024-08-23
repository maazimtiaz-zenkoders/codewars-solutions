/*Description:
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]*/

/*SOLUTION*/
function doubleEveryOther(array){
    
    for(let i=1;i<array.length;i+=2){
        array[i] *= 2;
    }
    return array;
}
let array = [1,2,3,4];
let result = doubleEveryOther(array);
console.log(result);

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/5809c661f15835266900010a*/