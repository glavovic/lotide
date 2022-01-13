const words = ["ground", "control", "to", "major", "tom"];
const animals = ['dog', 'giraffe', 'whale'];
const cities = ['montreal', 'vancouver', 'toronto']


const map = function(array, callback) {

  const results = [];

  for (let item of array) {

    results.push(callback(item));
  }

  return results
}

const results1 = map(words , word => word[0]);
const results2 = map(animals, animal => animal[0])
const results3 = map(cities, city => city[0])


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

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1)

assertArraysEqual(['d', 'g', 'w' ], results2)

assertArraysEqual(['m', 'v', 'y' ], results3)

