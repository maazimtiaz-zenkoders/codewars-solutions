/*Description:
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)*/

/*SOLUTION*/
function findMissingLetter(array){
    
    let start = array[0].charCodeAt(0);
    for(let i=0;i<array.length;i++){
        if(array[i].charCodeAt(0) !== start+i){
            return String.fromCharCode(start+i);
        }
    }
}

let array1 = ['a','b','c','d','f'];
let array2 = ['O','Q','R','S'];
console.log(array1);
console.log("Missing Letter in Array 1 is:", findMissingLetter(array1));
console.log(array2);
console.log("Missing Letter in Array 2 is:", findMissingLetter(array2));


/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/5839edaa6754d6fec10000a2*/

