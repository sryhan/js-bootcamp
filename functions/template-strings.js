
let name = 'Romulus';
let age = 24345
console.log(`Hello, my name is ${name} and my age is ${age}`);

let getScoreText = function (name='Anon', score = 0) {
    // return "Name: " + name + ", Score: " + score;
    return `Name: ${name}, Score: ${score}`;
};

let scoreText = getScoreText();
console.log(scoreText);

//challenge
let tipCalc = function (total, tipPercent=.2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`;
}

let tip = tipCalc(90, .59);
console.log(tip);