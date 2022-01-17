const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS