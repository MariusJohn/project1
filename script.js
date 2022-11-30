let randonNumber = Math.floor(Math.random() * 100) + 1;

const   guesses = document.querySelector('.guesses');
const   lastResult = document.querySelector('.lastResult');
const   lowOrHi = document.querySelector('.lowOrhi');
const   guessSubmit = document.querySelector('.guessSubmut');
const    guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

console.log(0b111110111);