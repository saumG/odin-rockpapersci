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

    // Return the key at the random index
    return keys[randomIndex];
}

console.log(getComputerChoice(dict))


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