/*Description:
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!*/

/*SOLUTION*/
function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
    console.log("Array Must Contain 10 Digits");
  }

  let phnNumber = `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;

  return phnNumber;
}

let arr = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log("Phone Number:", arr);

/*PROBLEM URL/LINK*/
/*https://www.codewars.com/kata/525f50e3b73515a6db000b83*/
