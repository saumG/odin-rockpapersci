//Game
let winDecide = {
    "Rock":"Scissors",
    "Paper":"Rock",
    "Scissors":"Paper"
};

let rpsEmoji = {
    "Rock":"✊",
    "Paper":"🖐️",
    "Scissors":"✌️"
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function getComputerChoice () {
    // Extract all keys from the dictionary object
    const keys = Object.keys(winDecide);

    // Generate a random index within the range of available keys
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Log the computer's choice
    //console.log(keys[randomIndex])

    // Return the key at the random index
    return keys[randomIndex]; 
}

function capitalize(str) {
    // Returns the string with the first letter capitalized
    return str[0].toUpperCase() + str.substring(1)
}

function playRound (playerSelection, computerSelection) {
    //Change the player and computer selection to only have their first letter capitalized
    playerSelection = capitalize(playerSelection.toLowerCase());
    computerSelection = capitalize(computerSelection.toLowerCase());

    // Check the dict to see who won, key value pair where key beats value
    if (winDecide[playerSelection] === computerSelection) {
        roundWinner = 'player';
        playerScore++;
    } else if (winDecide[computerSelection] === playerSelection) {
        roundWinner = 'computer';
        computerScore++;
    } else {
        roundWinner = 'tie';
    }

    updateRoundResultDesc(roundWinner, playerSelection, computerSelection)
}

//UI
const roundResults = document.querySelector('.round-results');
const roundResultsDesc = document.querySelector('.round-results-desc');

const playerChoice = document.querySelector('.player > .choice');
const computerChoice = document.querySelector('.computer > .choice');

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const endScreen = document.querySelector('.end-screen');
const endMessage = document.querySelector('.end-message');
const restartButton = document.querySelector('.restart');
const overlay = document.querySelector('.overlay');

// OLD, tedious way of listening to events
// rockButton.addEventListener('click', () => handleClick('Rock'));
// paperButton.addEventListener('click', () => handleClick('Paper'));
// scissorsButton.addEventListener('click', () => handleClick('Scissors'));


const rpsOptions = document.querySelectorAll('.square-button');

rpsOptions.forEach((button) => {
    button.addEventListener('click', () => {     
        playerSelection = getKeyByValue(rpsEmoji, button.textContent);
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        updateChoices(playerSelection, computerSelection);
        updateRoundResult();

        if (isGameOver()){
            openEndScreen();
            setFinalMessage();
            restartButton.addEventListener('click', () => {
                restartGame();
                closeEndScreen();
            })
        }
    })
})

// OLD way to handle click
// function handleClick(playerSelection){
//     if (isGameOver()) {
//         //end game
//         return
//     }

//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
//     updateChoices(playerSelection, computerSelection);
//     updateRoundResult();

// }

function updateChoices(playerSelection, computerSelection){
    playerChoice.textContent = rpsEmoji[playerSelection];
    computerChoice.textContent = rpsEmoji[computerSelection];
}

function updateRoundResult() {
    if (roundWinner === 'player') {
        roundResults.textContent = "You Win!";
    } else if (roundWinner === 'computer') {
        roundResults.textContent = "Alien Wins!";
    } else if (roundWinner === 'tie'){
        roundResults.textContent = "It's a tie!";
    }

    playerScoreElement.textContent = playerScore.toString();
    computerScoreElement.textContent = computerScore.toString();
}

function updateRoundResultDesc(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'player') {
        roundResultsDesc.textContent = `${playerSelection} destroys ${computerSelection}`;
    } else if (roundWinner === 'computer') {
        roundResultsDesc.textContent = `${playerSelection} gets destroyed by ${computerSelection}`;
    }else {
        roundResultsDesc.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
    return 
}


function openEndScreen(){
    endScreen.classList.add('active');
    overlay.classList.add('active');
}

function closeEndScreen() {
    endScreen.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage(){
    return playerScore > computerScore
    ? (endMessage.textContent = 'You sent the aliens back to their planet!!!')
    : (endMessage.textContent = 'The aliens used you as a test subject!!!');
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    roundResults.textContent = "Time to Fight...";
    roundResultsDesc.textContent = "First to 5 Wins!";
    updateRoundResult(); // updates scores to 0-0
    playerChoice.textContent = "?";
    computerChoice.textContent = "?";
    endScreen.classList.remove('active');
    overlay.classList.remove('active');
    
}

function getKeyByValue(object, value) {
    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}