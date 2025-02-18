'use strict';
'testing';

let secretNumber = Number(Math.trunc(Math.random() * 20)) + 1;
let currentScore = Number(document.querySelector('.score').textContent);
let highScore = Number(document.querySelector('.highscore').textContent);
let gameRunning = true;
// document.querySelector('.number').textContent = secretNumber; //secret number debug

// Again Button Function
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = `Start Guessing...`;
  currentScore = 20;
  gameRunning = true;
});

// Check Button Function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (currentScore > 0 && gameRunning === true) {
    if (guess === secretNumber) {
      gameRunning = false;
      document.querySelector('.number').style.width = '240rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent = `Correct Number! 🎉`;
      document.querySelector('.number').textContent = secretNumber;
      if (currentScore > highScore) {
        highScore = currentScore;
        document.querySelector('.highscore').textContent = currentScore;
      }
    } else {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Your guess is too high'
          : guess === 0
            ? `You didn't enter a number :(`
            : `Your guess is too low`;
      document.querySelector('.score').textContent = currentScore -= 1;
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    }
  } else {
    document.querySelector('body').style.backgroundColor = '#b80505';
    document.querySelector('.message').textContent = `You lost, try again?`;
    document.querySelector('.score').textContent = 0;
    gameRunning === false;
  }
});
