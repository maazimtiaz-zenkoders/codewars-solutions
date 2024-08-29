/*Description:
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

Examples
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]*/

/*SOLUTION*/
function difference(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] - array[j] === 2 || array[j] - array[i] === 2) {
        let newPair = [array[i], array[j]];

        if (array[i] < array[j]) {
          res.push(newPair);
        } else {
          res.push([array[j], array[i]]);
        }
      }
    }
  }
  res.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  return res;
}
console.log(difference([1, 2, 3, 4]));
console.log(difference([4, 1, 2, 3]));
console.log(difference([1, 23, 3, 4, 7]));
console.log(difference([4, 3, 1, 5, 6]));

/*PROBLEM LINK/URL*/
/*https://www.codewars.com/kata/5340298112fa30e786000688*/
