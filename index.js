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
    console.log(keys[randomIndex])

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
        roundWinner = 'player'
    } else if (winDecide[computerSelection] === playerSelection) {
        roundWinner = 'computer'
    } else {
        roundWinner = 'tie'
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

rockButton.addEventListener('click', () => handleClick('Rock'));
paperButton.addEventListener('click', () => handleClick('Paper'));
scissorsButton.addEventListener('click', () => handleClick('Scissors'));

function handleClick(playerSelection){
    if (isGameOver()) {
        //end game
        return
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    updateRoundResult();

}

function updateChoices(playerSelection, computerSelection){
    playerChoice.textContent = rpsEmoji[playerSelection];
    computerChoice.textContent = rpsEmoji[computerSelection];
}

function updateRoundResult() {
    if (roundWinner === 'player') {
        roundResults.textContent = "You Win!";
    } else if (roundWinner === 'computer') {
        roundResults.textContent = "Alien Wins!";
    } else {
        roundResults.textContent = "It's a tie!";
    }

    playerScoreElement.textContent = playerScore.toString();
    computerScoreElement.textContent = computerScore.toString();
}

function updateRoundResultDesc(roundWinner, playerSelection, computerSelection) {

}

function restartGame() {
    
}