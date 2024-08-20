/*Description:
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1*/

/*SOLUTION*/
function countRepeats(str){
    let counter = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            counter++;
        }
    }
    return counter;
}

let str1 = 'abbbbc';
let str2 = 'abbcca';
let str3 = 'ab cca';

console.log(countRepeats(str1));
console.log(countRepeats(str2));
console.log(countRepeats(str3));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061*/