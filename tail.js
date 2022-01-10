// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
  return console.log(`Assertion Passed: ${actual} === ${expected}`);
};

const tail = function(arr) {
  
  let tail = [];

  for (let i = 1; i < arr.length; i++) {
    tail.push(arr[i]);
  }
  return tail;
};

console.log(tail([1, 2, 3, 4]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));