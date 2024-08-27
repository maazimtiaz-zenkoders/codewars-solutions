/*Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.*/

/*SOLUTION*/

function highAndLow(str) {
  if (str.length === 0) {
    return "Array is Empty";
  }
  let high = str[0];
  let low = str[0];

  let array = str.split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > high) {
      high = array[i];
    }
    if (array[i] < low) {
      low = array[i];
    }
  }
  return [high, low];
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/554b4ac871d6813a03000035*/