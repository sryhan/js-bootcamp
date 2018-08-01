let name = '   Homer Simpson  ';

// length property 
console.log(name.length);

// convert to upper case
console.log(name.toUpperCase());

// convert to lower case
console.log(name.toLowerCase());

// includes method 
let password = 'abc123bobobob098';
console.log(password.includes('password'));

// trim
console.log(name.trim())

// challenge 

// isValidPassword 
// length is more than 8 and it doesn't contain the word password

let isValidPassword = function(thePass) {
    if (thePass.length < 8 || thePass.includes('password')) {
        return false
    }; 
    return true;
}

console.log(isValidPassword('239847239849'));
console.log(isValidPassword('thepasswordisboring'));
console.log(isValidPassword('homer'));
