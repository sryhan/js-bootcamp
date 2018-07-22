let isAccountLocked = false;
let userRole = 'Admin';

if (isAccountLocked) {
    console.log('Account is locked');
} else if (userRole === 'Admin') {
    console.log('welcome Admin');
} else {
    console.log('welcome');
}


//challenge 
let temp = 45

if (temp <= 32) {
    console.log('it is freezing');
} else if (temp >= 90) {
    console.log('it is hot');
} else {
    console.log('not too bad');
}