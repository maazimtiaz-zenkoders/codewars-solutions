/*Description:
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.*/

/*SOLUTION*/
function first_non_repeating_letter(str){
    for(let i = 0; i<str.length;i++){
        let char = str[i];
        let lowerStr = char.toLowerCase();
        
        let counter = 0;
        for(let j = 0; j<str.length;j++){
            if(str[j].toLowerCase() === lowerStr){
            counter++;
            }
        }
        if(counter === 1){
            return char;
        }

    }
    return "";
}
let str1 = "stress";
let str2 = "sTreSS";
let str3 = "eebbdd";
console.log(first_non_repeating_letter(str1));
console.log(first_non_repeating_letter(str2));
console.log(first_non_repeating_letter(str3));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/52bc74d4ac05d0945d00054e*/
