'use strict';

//* check button event listener

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number){
  document.querySelector('.number').textContent = number;
}
const displayScore = function(score){
  document.querySelector('.score').textContent = score;
}
const displayHighscore = function(highscore){
  document.querySelector('.highscore').textContent = highscore;
}
const displayBackgroundColor = function (backgroundColor){
  document.querySelector('body').style.backgroundColor = backgroundColor;
}
const displayWidth = function (width){
  document.querySelector('.number').style.width = width;
}

// ! click event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ! NO INPUT
  if (!guess) {
    
    displayMessage(`🚫 wrong input`);

    // ! guess is equal
  } else if (guess === secretNumber) {
    
    displayMessage(` 😁 Correct number!`);
    
    displayNumber(secretNumber);
    

    
    displayBackgroundColor('#60b347');
    displayWidth('30rem')
    
    if(score > highscore) {
      highscore = score ;
      displayHighscore(highscore);
      
    }
  }

    //! guess is not equal
    else if (guess !== secretNumber){
      if (score > 1) {
        
        displayMessage(guess > secretNumber ? 'Number too high!': 'Number too low!');
        score--;
        displayScore(score);
        
      }
      else {
        
        displayMessage(`😭You lost the Game!`);
        displayScore(0);
        
      }
    }
  })
document.querySelector('.again').addEventListener('click', function(){
    score = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
  
  
  displayMessage('start guessing...');
  displayNumber('?');
  displayScore(score);
  displayBackgroundColor('#222');
  displayWidth('15rem');
    document.querySelector('.guess').value = '' ;
  })