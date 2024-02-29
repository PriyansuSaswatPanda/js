const random_number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a valid number");
  } else if (guess > 100) {
    alert("Please enter a valid number");
  } else {
    if (numGuess === 11) {
      displayGuess(guess);
      displayMesssage(`Game over . Random number was ${random_number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random_number) {
    displayMesssage(`You guessed it right`);
    endGame();
  } else if (guess < random_number) {
    displayMesssage(`Number is Low`);
  } else if (guess > random_number) {
    displayMesssage(`Number is High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMesssage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    const random_number = parseInt(Math.random() * 100 + 1);
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    displayMesssage("Enter a Number")
    playGame = true;
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newgame();
}
