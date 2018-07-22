//multiple arguments
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(23, 45, 2);
console.log(result);

//default arguments 
let getScoreText = function (name='Anon', score = 0) {
    // console.log(name);
    // console.log(score);
    return "Name: " + name + ", Score: " + score;
};

// getScoreText('Bob',10);
let scoreText = getScoreText(undefined, 99);
console.log(scoreText);


//challenge
//total, tipPercent, 

let tipCalc = function (total, tipPercent=.2) {
    return total * tipPercent;
}

let tip = tipCalc(20);
console.log(tip);