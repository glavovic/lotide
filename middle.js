const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if (arr1[x] !== arr2[x]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2,) === true) {
    return console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
};

/* The middle function should return an array with only the middle element(s) of
the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
*/

/*
For arrays with odd number of elements,
 an array containing a single middle element should be returned.
 */
const middle = function(array) {

  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  }
  if (array.length % 2 === 0) {
    midArray = array.splice(array.length / 2 - 1, 2);
    console.log(midArray);
    return midArray;
  }
  midArray = array.splice(Math.floor(array.length / 2), 1);
  return midArray;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

