/* The middle function should return an array with only the middle element(s) of
the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
*/

/*
For arrays with odd number of elements,
 an array containing a single middle element should be returned.
 */
const middle = function(array) {

  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  }
  if (array.length % 2 === 0) {
    midArray = array.splice(array.length / 2 - 1, 2);
    console.log(midArray);
    return midArray;
  }
  midArray = array.splice(Math.floor(array.length / 2), 1);
  return midArray;
};

module.exports = middle;

