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



document.querySelector('.again').addEventListener('click', function(){
    score = '20';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
  
  
  displayMessage('start guessing...');
  displayNumber('?');
  displayScore(score);
  displayBackgroundColor('#222');
  displayWidth('15rem');
  
    // document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent= 'start guessing...';
    document.querySelector('.guess').value = '' ;
    
  
    
  
  })