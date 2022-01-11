const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`Assertion Passed: ${actual} === ${expected}`);
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let x = 0; x < arr1.length; x++) {
      if(arr1[x] !== arr2[x]) {
        return false
      }
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS
