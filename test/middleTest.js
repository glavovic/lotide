//const assertArraysEqual = require("../assertArraysEqual");
//const middle = require('../middle')
//
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return [2] after inputing [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3,4]), [2, 3])
  });

  it('should return [3, 4] after inputing [2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

  it('should return [] after inputing 2 item  array [2, 3]', () => {
    assert.deepEqual(middle([1, 2]), [])
  });

});