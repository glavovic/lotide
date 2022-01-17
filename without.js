const without = function(source, toRemove) {

  let cleanArr = [];

  for (let i = 0; i < source.length; i++) {

    cleanArr.push(source[i]);
    for (let x = 0; x < toRemove.length; x++) {
      if (source[i] === toRemove[x]) {
        cleanArr.pop();
      }
    }
  }
  return cleanArr;
};

module.exports = without;