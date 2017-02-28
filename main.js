//sonnet file
let sonnets = require('./sonnets.js');

function wordFrequency(text) {
  let words = text.split( ' ' );
  let frequency = {};

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

console.log(wordFrequency(sonnets));

//tests
let testRunner = require('./word-frequency-tests.js');
testRunner(wordFrequency);
