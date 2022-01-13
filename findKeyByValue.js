// test code
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`Assertion Passed: ${actual} === ${expected}`);
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, value) {
// getting the keys from the object
  let keys = Object.keys(object);
// iterating throught the keys to find one that matches a key value pair
  for (let key of keys) {
    if(object[key] === value) {
      return key;
    }
  }
};

findKeyByValue(bestTVShowsByGenre)

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);