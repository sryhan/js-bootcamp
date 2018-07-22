// function - input (argument), code, output 

// let greetuser = function () {
//     console.log('welcome');
// };

// greetuser();


let square = function (num) {
    let result = num * num;
    return result;
}

let value1 = square(4);
let value2 = square(6);

console.log(value1)


//challenge 
f2c = function(f) {
    let fah = ((f-32)*5) / 9;
    return fah;
};

let c1 = f2c(32);
let c2 = f2c(68)
console.log(c1);
console.log(c2);