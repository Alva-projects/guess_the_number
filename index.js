const target = Math.floor(Math.random()*10+1); 
let guess = null;

while (guess !== target) {
    console.log(`Guess: ${guess}`);
    guess = parseFloat(prompt(`What number am I thinking of?`));
}
if (guess > target) {
guess = parseFloat(prompt(`Lower`));
} else if {
parseFloat(prompt(`Lower`));
else {
    console.log(`Congratulations! You managed to guess the correct number!`); 
}
}
    

/*
Target: ${target}.
console.log('Incorrect');
if (guess === target)
console.log('Correct');
let guess = null;
console.log(target);

/*
    if guess = unfedined("Please have a guess");
    if guess = target
    if guess <  target; prompt('Guess higher!')
    while guess = null
    console.log('You guessed the right number!')
*/