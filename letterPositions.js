// testing codes

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



// code
const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);