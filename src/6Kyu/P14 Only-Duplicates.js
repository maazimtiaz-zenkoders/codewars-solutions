/*Description:
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"*/

/*SOLUTION*/
function onlyDuplicates(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[j] === char) {
        count++;
      }
    }
    if (count > 1) {
      res += char;
    }
  }
  return res;
}
let str = "abccdefee";
console.log(onlyDuplicates(str));

/*PROBLEM LINK/URL*/
/*https://www.programiz.com/javascript/online-compiler/*/
