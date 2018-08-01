let num = 103.946

console.log(num.toFixed(10))

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let rando = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rando);

// challenge

let guessGame = function(guess) {
    let min = 1;
    let max = 5;
    let daRandom = Math.floor(Math.random() * (max - min + 1) + min)
    return guess === daRandom
}

let guess1 = guessGame(3);
console.log(guess1);

