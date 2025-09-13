let num = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector("#guessSubmit");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector("#lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let guessCount = 0;

let playGame = true;

if (playGame) {
    submitButton.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        
        if (validateGuess(guess)) {
            
            checkGuess(guess);
        }
        userInput.value = "";
        userInput.focus();
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return false;
    }
    prevGuess.push(guess);
    if(guessCount === 10) {
        guessDisplay(guess);
        displayMessage(`Game Over! The number was ${num}`);
        endGame();
    }
    else {
        checkGuess(guess);
        guessDisplay(guess);  
    }
}

function checkGuess(guess) {
    if (guess === num) {
        guessCount++;
        displayMessage(`Congratulations! You guessed the number in ${guessCount} tries!`);
        endGame();
    } else if (guess < num) {
        guessCount++;
        displayMessage("Too low! Try again.");
    } else if (guess > num) {
        guessCount++;
        displayMessage("Too high! Try again.");
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = message;
}

function guessDisplay(guess) {
    userInput.value = "";
    if(guess === num) {
        guesses.innerHTML += `${guess}`;
    }
    else {
        guesses.innerHTML += `${guess}, `;
    }
    lastResult.innerHTML = `${10-guessCount}`;
}

function newGame() {
    document.querySelector("#newGame").addEventListener("click", function() {
        num = parseInt(Math.random() * 100 + 1);
        guessCount = 1;
        prevGuess = [];
        guesses.innerHTML = "";
        lastResult.innerHTML = "10";
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        resultParas.removeChild(p);
        playGame = true;
    });
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame">Start new game</button>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
}