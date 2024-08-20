/*Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.*/

/*SOLUTIION*/
function findUniqueNumber(array){
    for(let i=0;i<array.length;i++){
        let counter = 0;
        for(let j=0;j<array.length;j++){
            if(array[i] === array[j]){
                counter++;
            }
        }
        if(counter === 1){
            return array[i];
        }
    }
}
let array1 = [1, 1, 1, 2, 1, 1];
let array2 = [0, 0, 0.55, 0, 0];
    if(array1.length < 3){
        console.log("Array 1 Must Contain 3 Numbers")
    }else{
        console.log("Unique Number in Array 1 is:",findUniqueNumber(array1));
    }
    if(array2.length < 3){
        console.log("Array 2 Must Contain 3 Numbers")
    }else{
        console.log("Unique Number in Array 2 is:",findUniqueNumber(array2));
    }

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/585d7d5adb20cf33cb000235*/

