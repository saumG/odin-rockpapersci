let dict = {
    "Rock":"Scissors",
    "Paper":"Rock",
    "Scissors":"Paper"
}

function getComputerChoice (dict) {
    // Extract all keys from the dictionary object
    const keys = Object.keys(dict);

    // Generate a random index within the range of available keys
    const randomIndex = Math.floor(Math.random() * keys.length);

    // Return the key at the random index
    return keys[randomIndex];
}

getComputerChoice(dict)