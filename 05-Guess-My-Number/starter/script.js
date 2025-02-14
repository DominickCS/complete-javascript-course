'use strict';

'testing';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let currentScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (currentScore > 1) {
    if (!guess) {
      document.querySelector('.message').textContent =
        `You didn't enter a number :( `;
      document.querySelector('.score').textContent = currentScore -= 1;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent =
        `The number you entered is too low :(`;
      document.querySelector('.score').textContent = currentScore -= 1;
      document.querySelector('.guess').value = '';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent =
        `The number you entered is too high :(`;
      document.querySelector('.score').textContent = currentScore -= 1;
      document.querySelector('.guess').value = '';
    } else if (guess === secretNumber) {
      document.querySelector('body');
      document.querySelector('.message').textContent = `Correct Number! 🎉`;
      document.querySelector('.highscore').textContent = currentScore;
    }
  } else {
    document.querySelector('.message').textContent = `You lost, try again?`;
    document.querySelector('.score').textContent = 0;
  }
});
