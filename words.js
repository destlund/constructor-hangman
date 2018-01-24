var BlankReplacer = require('./letters.js');

var SelectWord = function(wordList) {

    // select a word from the list to begin the game
    this.wordIndex = Math.floor(Math.random() * wordList.length);
    this.word = wordList[wordIndex];
    // undeclared variables go global. cool.
    word = this.word;
    // let's not ask for that word again.
    wordList.splice(wordIndex, 1);
    blanks = [];
    var blank = "_ ";
    for ( i = 0; i < word.length; i++ ) {
        blanks.push(blank);
    }
    console.log(blanks.join(""));
    // this.blanks = blanks;
    return this.word   
};

module.exports = SelectWord;

