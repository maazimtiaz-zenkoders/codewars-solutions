/*Description:
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

/*SOLUTION*/
function findOccurrence(string){
    let strLower = string.toLowerCase();
    let count = {};
    
    for(let i of strLower){
        if(count[i]){
            count[i]++;
        }else{
            count[i] = 1;
        }
    }
    return count;
}
let string = 'aba';
console.log((findOccurrence(string)));

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/52efefcbcdf57161d4000091*/
