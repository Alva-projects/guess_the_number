const target = Math.floor(Math.random()*10+1); 
let guess = null;

while (guess !== target) {
    console.log(`Target: ${target}. Guess: ${guess}`);
    guess = parseFloat(prompt("Guess"));
}
console.log('Incorrect');
if (guess === target)
console.log('Correct');
let guess = null;
console.log(target);

/*
    if guess = unfedined("Please have a guess");
    if guess = target
    if guess > target; prompt ('Guess lower!')
    if guess <  target; prompt('Guess higher!')
    while guess = null
    console.log('You guessed the right number!')
*/