/*Description:
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.*/

/*SOLUTION*/
function isAlt(str) {
  if (str.length <= 1) return true;

  let vowels = "aeiou";

  function isVowel(char) {
    for (let i = 0; i < vowels.length; i++) {
      if (char.toLowerCase() === vowels[i]) {
        return true;
      }
    }
    return false;
  }
  let prevVowel = isVowel(str[0]);

  for (let i = 1; i < str.length; i++) {
    let currVowel = isVowel(str[i]);

    if (currVowel === prevVowel) {
      return false;
    }
    prevVowel = currVowel;
  }
  return true;
}
console.log(isAlt("amazon"));
console.log(isAlt("apple"));
console.log(isAlt("banana"));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/59325dc15dbb44b2440000af*/
