var correctSequence = [];
var inputSequence = [];
var score;
var highscore = 0;
var gameActive = false;


let yellowButton = document.getElementById('yellowButton');
let blueButton = document.getElementById('blueButton');
let redButton = document.getElementById('redButton');
let greenButton = document.getElementById('greenButton');
let startButton = document.getElementById('startButton');
let htmlScore = document.getElementById('score');
let htmlHighscore = document.getElementById('highscore');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

startButton.addEventListener("click", function() {
  if (gameActive)
    return;
  startButton.disabled = true;
  gameActive = true;
  score = -1;
  nextLevel();
});

function displaySequence() {
  yellowButton.disabled = true;
  blueButton.disabled = true;
  redButton.disabled = true;
  greenButton.disabled = true;

  var index = 0;

  var i1 = setInterval(
    function() {
      if (index >= correctSequence.length) {
        clearInterval(i1);
        yellowButton.disabled = false;
        blueButton.disabled = false;
        redButton.disabled = false;
        greenButton.disabled = false;
        return;
      }

      changeColor(correctSequence[index]);
      index++;
    }, 1000);
}

yellowButton.addEventListener("click", function() {
  console.log('1');
  inputSequence.push('1');
  console.log(inputSequence);
  console.log(correctSequence);

  if (inputSequence[inputSequence.length - 1] != correctSequence[inputSequence.length - 1]) {
    fail();
  } else if (inputSequence.length == correctSequence.length) {
    nextLevel();
  }
});
blueButton.addEventListener("click", function() {
  console.log('2');
  inputSequence.push('2');

  if (inputSequence[inputSequence.length - 1] != correctSequence[inputSequence.length - 1]) {
    fail();
  } else if (inputSequence.length == correctSequence.length) {
    nextLevel();
  }
});
redButton.addEventListener("click", function() {
  console.log('3');
  inputSequence.push('3');

  if (inputSequence[inputSequence.length - 1] != correctSequence[inputSequence.length - 1]) {
    fail();
  } else if (inputSequence.length == correctSequence.length) {
    nextLevel();
  }
});
greenButton.addEventListener("click", function() {
  console.log('4');
  inputSequence.push('4');

  if (inputSequence[inputSequence.length - 1] != correctSequence[inputSequence.length - 1]) {
    fail();
  } else if (inputSequence.length == correctSequence.length) {
    nextLevel();
  }
});

function nextLevel() {
  score++;
  highscore = Math.max(score, highscore);
  var num = getRandomInt(1, 5);
  console.log(num);
  correctSequence.push(num);
  displaySequence();
  inputSequence = [];
  htmlScore.innerHTML = "Score: " + score;
  htmlHighscore.innerHTML = "Highscore: " + highscore;
}

function fail() {
  gameActive = false;
  correctSequence = [];
  inputSequence = [];
  startButton.disabled = false;
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
