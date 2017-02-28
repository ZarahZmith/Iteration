//sonnet file
let sonnets = require('./sonnets.js');



function wordFrequency(text) {
  let words = text.split( ' ' );
  let frequency = {

  };

  words.forEach( function listOut(eachWord) {
    if (eachWord !== '') {
      if (!frequency[eachWord]) {
        frequency[eachWord] = 1;
      } else {
        //repeat to add
        frequency[eachWord] = frequency[eachWord] + 1;
      }

    }

  });
  return frequency;
}

console.log(wordFrequency("NaN NaN NaN Batma"));

//practice
// let testString = "This is a string of words. Some words appear more than once. a word."
// let test = testString.split( ' ' );
//
// test.forEach( function listOut(eachTestWord) {
//   console.log(eachTestWord);
// });







//tests
// let testRunner = require('./word-frequency-tests.js');
// testRunner(wordFrequency);
