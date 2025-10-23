const target = Math.floor(Math.random()*10+1); 
let guess = null;

while (guess !== target) {
    console.log(`Guess: ${guess}`);
    guess = parseFloat(prompt(`What number am I thinking of?`));
}
if (guess === target) {
    console.log(`Congratulations! You managed to guess the correct number!`);
}   else if (guess > target){
        console.log (`Lower`);
    }
    else (guess < target) {
        console.log (`Higher`);
}


/*if else {
    console.log('Wrong');
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