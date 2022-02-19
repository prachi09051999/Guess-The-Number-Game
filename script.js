'use strict';
let randomNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const scoreBoard = document.querySelector('.right .label-score .score');
const inputCheckButton = document.querySelector('.left .check');
const messageBox = document.querySelector('.right .message');
const inputField = document.querySelector('.left input');
const highScoreBoard = document.querySelector('.right .label-highscore .highscore');
const answerBoard = document.querySelector('.number');
const againBtn = document.querySelector('.again');

const generateRandomNumber = () => Math.trunc(Math.random()*20)+1;

const displayMessage = message => {
  messageBox.innerHTML = message;

}
const resetAll = () => {
  randomNumber = generateRandomNumber();
  inputCheckButton.classList.remove("disabled");
  document.querySelector('body').classList.remove('correct');
  score = 20;
  scoreBoard.innerHTML = score;
  answerBoard.innerHTML = '?';
  displayMessage("Start guessing ...");
}

const inputCheck = () => {
  if(inputField.value === '') return;
  console.log(inputField.value,randomNumber);
  if(inputField.value-'0'==randomNumber){
    displayMessage("🎉 You're Right");
    inputCheckButton.classList.add("disabled");
    answerBoard.innerHTML = randomNumber;
    document.querySelector('body').classList.add('correct');
    if(score > highScore) 
    {
      highScore = score;
      highScoreBoard.innerHTML = highScore ;
    }
  }
  else
  {
    inputField.value - '0' > randomNumber ? displayMessage('📈 Too High') : displayMessage('📉 Too Low');
  score --;
  scoreBoard.innerHTML = score;
  if(score == 0){
    displayMessage("😫 You Lost the Game");
    inputCheckButton.classList.add("disabled");
  }
}
  inputField.value = '';
}

inputCheckButton.addEventListener("click",function(){
  inputCheck();
});

againBtn.addEventListener('click',resetAll);

// Open the Modal
const modalContainer = document.querySelector('.modal-container');
const modalOpenButton = document.querySelector('.btn-container .modal');
const crossMark = document.querySelector('.cross');
const modalContent = document.querySelector('.modal-content');

const openModal = () => {
 modalContainer && modalContainer.classList.add("show");
}

modalOpenButton.addEventListener('click',openModal);

// close the modal

const closeModal = () => {
modalContainer && modalContainer.classList.remove('show');
}

crossMark.addEventListener('click',closeModal);
modalContainer.addEventListener('click',function(e){
  if(e.target.closest('.modal-content')) return;
  closeModal();
});

document.addEventListener("keydown",function(e){
  if(e.key === 'Escape' && modalContainer.classList.contains('show')){ 
  closeModal();
  }
});