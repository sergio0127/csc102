// Function to generate a random number between 1 and 6
function rollDie() {
    // Generate a random number, multiply by 6, round down, then add 1
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the Craps game
function playCraps() {
    // Roll two dice
    let die1 = rollDie();
    let die2 = rollDie();
    
    // Calculate the sum of the two dice
    let sum = die1 + die2;
    
    // Output the result of the dice rolls
    let resultMessage = `You rolled a ${die1} and a ${die2}. Sum: ${sum}. `;
    
    // Determine the game result based on the sum and the values of the dice
    if (sum === 7 || sum === 11) {
        // If the sum is 7 or 11, the player loses
        resultMessage += "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If both dice are the same and even, the player wins
        resultMessage += "You won!";
    } else {
        // Otherwise, it's a push
        resultMessage += "You pushed!";
    }
    
    // Output the result message to the webpage
    document.getElementById("gameResult").innerHTML = resultMessage;
}

// Add an event listener to the play button to start the game when clicked
document.getElementById("playButton").addEventListener("click", playCraps);
