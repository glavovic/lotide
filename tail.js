

const tail = function(arr) {
  
  let tail = [];

  for (let i = 1; i < arr.length; i++) {
    tail.push(arr[i]);
  }
  return tail;
};

// test case
console.log(tail([1, 2, 3, 4]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
