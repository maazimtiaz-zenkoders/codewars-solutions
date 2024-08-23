/*Description:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

/*SOLUTION*/
function uniqueInOrder(string){
    let result = [];
    
    for(i=0;i<string.length;i++){
        if(result.length === 0 || string[i] !== result[result.length-1]){
            result.push(string[i]);
        }
    }
    return result;
}
let str1 = 'AAAABBBCCDAABBB';
let str2 = 'ABBCcAD';
let str3 = [1,2,2,3,3];

console.log(uniqueInOrder(str1));
console.log(uniqueInOrder(str2));
console.log(uniqueInOrder(str3));

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/54e6533c92449cc251001667*/