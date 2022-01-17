const tail = require('../tail')
const assertEqual = require('../assertEqual')

// test case
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);;