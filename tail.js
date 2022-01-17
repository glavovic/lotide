const tail = function(arr) {
  
  let tail = [];

  for (let i = 1; i < arr.length; i++) {
    tail.push(arr[i]);
  }
  return tail;
};

module.exports = tail;
