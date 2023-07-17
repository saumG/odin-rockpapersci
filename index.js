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

function game() {
    // Initialize the player and computer score to 0
    playerScore = 0;
    computerScore = 0;
    
    while (playerScore < 5 && computerScore < 5) {
        // Prompt the player to enter their choice (Rock, Paper, or Scissors)
        playerSelection = prompt("Enter one of the following: Rock, Paper, or Scissors")
        // Generate the computer's choice
        computerSelection = getComputerChoice();
        // Determine the result of the round
        result = playRound(playerSelection, computerSelection)
        // Log the result to the console
        console.log(result);
        // Determine the round winner
        roundWinner = winnerRound(result);
        // Increment the score of the corresponding winner
        if (roundWinner === "player") {
            playerScore++;
        } else if (roundWinner === "computer") {
            computerScore++;
        }
    }



    // Log the final scores to the console
    console.log(playerScore + " : " + computerScore)
}



// // Start the game
// game()

