// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`Assertion Passed: ${actual} === ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);