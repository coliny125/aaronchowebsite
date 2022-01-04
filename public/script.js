var correctSequence = [];
var inputSequence = [];
var score = -1;
var highscore;
var gameActive = false;
var position;


let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');
let redButton = document.getElementById('redButton');
let greenButton = document.getElementById('greenButton');
let startButton = document.getElementById('startButton');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

startButton.addEventListener("click", function() {
  startButton.disabled = true;
  gameActive = true;
  position = 0;
  nextLevel();
  score = 0;
  startGame();
});

function startGame() {
  while (gameActive) {
    displaySequence();
    for (var i = 0; i < correctSequence.length; i++) {
      userSequence(i);
    }
    nextLevel();
    position = 0;
    score++;
  }
}

function displaySequence() {
  yellowButton.disabled = true;
  blueButton.disabled = true;
  redButton.disabled = true;
  greenButton.disabled = true;

  setTimeout(() => {
    for (var i = 0; i < correctSequence.length; i++) {
      changeColor(correctSequence[i]);
    }
  }, 200);

  setTimeout(() => {
    yellowButton.disabled = false;
    blueButton.disabled = false;
    redButton.disabled = false;
    greenButton.disabled = false;
  }, 1500);
}

function userSequence(pos) {
  yellowButton.addEventListener("click", function() {
    console.log('1');
    inputSequence.push('1');

    if (inputSequence[pos] != correctSequence[pos]) {
      fail();
    }
  });
  blueButton.addEventListener("click", function() {
    console.log('2');
    inputSequence.push('2');

    if (inputSequence[pos] != correctSequence[pos]) {
      fail();
    }
  });
  redButton.addEventListener("click", function() {
    console.log('3');
    inputSequence.push('3');

    if (inputSequence[pos] != correctSequence[pos]) {
      fail();
    }
  });
  greenButton.addEventListener("click", function() {
    console.log('4');
    inputSequence.push('4');

    if (inputSequence[pos] != correctSequence[pos]) {
      fail();
    }
  });


}

function nextLevel() {
  var num = getRandomInt(1, 5);
  console.log(num);
  correctSequence.push(num);
}

function fail() {
  gameActive = false;
  highscore = score;
  correctSequence = [];
  inputSequence = [];
}

function changeColor(color) {
  switch (color) {
    case (1):
      yellowButton.classList.add("lighterYellow");
      setTimeout(() => {
        yellowButton.classList.remove("lighterYellow")
      }, 200);
      break;
    case (2):
      blueButton.classList.add("lighterBlue");
      setTimeout(() => {
        blueButton.classList.remove("lighterBlue")
      }, 200);
      break;
    case (3):
      redButton.classList.add("lighterRed");
      setTimeout(() => {
        redButton.classList.remove("lighterRed")
      }, 200);
      break;
    case (4):
      greenButton.classList.add("lighterGreen");
      setTimeout(() => {
        greenButton.classList.remove("lighterGreen")
      }, 200);
      break;
  }
}
