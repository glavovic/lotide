const assert = require('chai').assert;
const tail = require('../tail');

// test case
describe('#tail', () => {

  it('should return [2, 3] after inputing [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3])
  });

  it('should return [2, 3, 4, 5] after inputing [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, '4', 5]), [2, 3, '4', 5])
  })

});