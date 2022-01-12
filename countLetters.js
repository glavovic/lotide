
// main function
const countLetters = function(letterCounter) {
  
  const results = {};
  
  for (let letter of letterCounter) {
    if (letter !== ' ') {

      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


// testing

const string1 = "lighthouse in the house";

countLetters(string1);
