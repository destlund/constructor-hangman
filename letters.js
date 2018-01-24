var SelectWord = require('./words.js')

var BlankReplacer = function (word, blanks, letter, badGuesses) {
    this.word = word;
    this.blanks = blanks;
    this.letter = letter;
    this.badGuesses = badGuesses
    if (word.includes(letter)) {
        console.log("Excellent guess!")
        goodGuess = true
        for (i = 0; i < word.length; i++) {
            if (letter == word[i]) {
                blanks[i] = letter;
            };
        };
    } else {
        console.log("Oops! Try again?");
        goodGuess = false;
        if (badGuesses.includes(letter) == false) {
            badGuesses.push(letter);
        } else if (badGuesses.includes(letter)) {
            console.log("You've already tried that letter, silly.")
        }
    }
};


module.exports = BlankReplacer;