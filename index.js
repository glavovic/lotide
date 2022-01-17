// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const assertObjectsEqual = require('./assertObjectsEqual')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const letterPositions = require('./letterPositions')
const map = require('./map')
const without = require('./without')


module.exports = {

  head:   head,
  tail:   tail,
  middle: middle,
  takeUntil: takeUntil,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  map: map,
  without: without

};