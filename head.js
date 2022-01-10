// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`Assertion Passed: ${actual} === ${expected}`);
};

const head = function(arr1) {
return arr1[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([6]), 6);