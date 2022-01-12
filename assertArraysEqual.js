


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


const without = function(source, toRemove) {

  let cleanArr = [];

  for (let i = 0; i < source.length; i++) {

    cleanArr.push(source[i]);
    for (let x = 0; x < toRemove.length; x++) {
      if (source[i] === toRemove[x]) {
        cleanArr.pop();
      }
    }
  }
  return cleanArr;
};







const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);