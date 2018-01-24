var SelectWord = require('./words.js')
var BlankReplacer = require('./letters.js');
var inquirer = require(inquirer)

var wordList = [
    'marty',
    'mcfly',
    'gigawatts',
    'delorean',
    'lorraine',
    'biff',
    'pepsi',
    'calvin',
    'capacitor',
    'plutonium'
    ];
badGuesses = []


SelectWord(wordList);
console.log(word + '\n' + word.length);
BlankReplacer(word, blanks, 'r', badGuesses);
console.log('The word is: ' + blanks.join('') + '\nLetters already guessed: ' + badGuesses.join(''));

console.log(goodGuess)