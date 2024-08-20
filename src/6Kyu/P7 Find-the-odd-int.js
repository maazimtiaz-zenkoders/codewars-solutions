/*Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).*/

/*SOLUTION*/
function findOdd(array){
    for(let i=0;i<array.length;i++){
        let counter = 0;
        for(let j=0;j<array.length;j++){
            if(array[i] === array[j]){
                counter++;
            }
        }
        if(counter %2 !== 0){
            return array[i];
        }
    }
}
let array1 = [7];
let array2 = [0];
let array3 = [1,1,2];
let array4 = [0,1,0,1,0];
let array5 = [1,2,2,3,3,3,4,3,3,3,2,2,1];
console.log(findOdd(array1));
console.log(findOdd(array2));
console.log(findOdd(array3));
console.log(findOdd(array4));
console.log(findOdd(array5));


/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/54da5a58ea159efa38000836*/