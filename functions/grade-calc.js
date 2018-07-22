// student score, total possible score 
// 15/20 -> You got a C (75%)

let studentScore = function (score = 0, possibleScore = 20) {
    let percent = (score / possibleScore) * 100
    //my attempt
    // if (theScore >= 90) {
    //     return `You scored ${score}/${possibleScore} and got an A (${theScore}%)`;
    // } else if (theScore >= 80 && theScore < 90) {
    //     return `You scored ${score}/${possibleScore} and got a B (${theScore}%)`;
    // } else if (theScore >= 70 && theScore < 80) {
    //     return `You scored ${score}/${possibleScore} and got a C (${theScore}%)`;
    // } else if (theScore >= 60 && theScore < 70) {
    //     return `You scored ${score}/${possibleScore} and got an D (${theScore}%)`;
    // } else {
    //     return `You scored ${score}/${possibleScore} and got an F (${theScore}%)`;
    // }

    let letterGrade = '';

    if (percent >= 90) {
        letterGrade = 'A';
    } else if (percent >= 80) {
        letterGrade = 'B';
    } else if (percent >= 70) {
        letterGrade = 'C';
    } else if (percent >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return `You got a ${letterGrade} (${percent})`;
}

let thisScore = studentScore(44, 45);
console.log(thisScore);