let dict = {
    "Rock":"Scissors",
    "Paper":"Rock",
    "Scissors":"Paper"
};

function getComputerChoice (dict) {
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
    return str[0].toUpperCase() + str.substring(1)
}


function playRound (playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection.toLowerCase());
    computerSelection = capitalize(computerSelection.toLowerCase());

    if (dict[playerSelection] === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (dict[computerSelection] === playerSelection) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "It's a tie!";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    roundNum = 5;
    roundCurr = 1;
    while (roundCurr <= roundNum) {
        playerSelection = prompt("Enter one of the following: Rock, Paper, or Scissors")
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        roundCurr++;
    }
}
