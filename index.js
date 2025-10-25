//This is my random number guessing game between 1-10
const target = Math.floor(Math.random()*10+1); 
let guess = null;

while (guess !== target) {
    console.log(`Guess: ${guess}`);
    guess = parseFloat(prompt(`What number am I thinking of?`));
    if (guess > target) {
        console.log("Lower");
    } else if (guess < target) {
        console.log("Higher");
    } else {
        console.log(`Congratulations! You managed to guess the correct number!`); 
    }
}