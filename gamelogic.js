var SelectWord = require('./words.js')
var BlankReplacer = require('./letters.js');
var inquirer = require('inquirer')

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

// This starts the game:
function gameStart() {
    SelectWord(wordList); 
    console.log(word + ', you cheater.');
    badGuesses = []
    gameContinue();
}

function gameContinue() {
    console.log('The word is: ' + blanks.join('') + '\nLetters already guessed: ' + badGuesses.join(''));
    if (word == blanks.join('')) {
        console.log('Congratulations! You guessed it!');
        playAgain();
        return;
    } else if (badGuesses.length == 10) {
        console.log('Oops. Too many tries.');
        playAgain();
        return;
    } else {
        userInput();
    }
}

function userInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Guess a letter'
        }
    ]).then(function(inq) {
        console.log(inq.guess)
        if (inq.guess.length > 1) {
            console.log('That is more than one letter; try again.')
            userInput();
        } else if (inq.guess.length = 0) {
            console.log("You didn't enter anything. Try again.")
            userInput();
        // } else if (parseInt(inq.guess) != -1) {
        //     console.log("You entered a number, not a letter, silly. Try again.")
        //     userInput();
        } else {
            BlankReplacer(word, blanks, inq.guess, badGuesses);
            gameContinue();
        };
        
    });
}

function playAgain() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'yes',
            message: 'Play again?'
        }
    ]).then(function(resp) {
        if (resp == 'yes') {
            gameStart();
        } else {
            console.log('Goodbye.')
        }
    })
}

gameStart();
