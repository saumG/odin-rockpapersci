//Game
let dict = {
    "Rock":"Scissors",
    "Paper":"Rock",
    "Scissors":"Paper"
};

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function getComputerChoice () {
    // Extract all keys from the dictionary object
    const keys = Object.keys(dict);

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
    if (dict[playerSelection] === computerSelection) {
        roundWinner = 'player'
    } else if (dict[computerSelection] === playerSelection) {
        roundWinner = 'computer'
    } else {
        roundWinner = 'tie'
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

//UI
const roundResults = document.querySelector('.round-results');
const roundResultsDesc = document.querySelector('.round-results-desc');
const playerChoice = document.querySelector('.player > .choice');
const computerChoice = document.querySelector('.computer > .choice');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');


function handleClick(playerSelection){

}

function updateChoices(playerSelection, computerSelection){

}

function updateScore() {

}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {

}

function restartGame() {
    
}