const head = require('../head');
const assertEqual = require('../assertEqual');
// test
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([6]), 6);