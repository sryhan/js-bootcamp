let temp = 45;

if (temp >= 60 && temp <= 90) {
    console.log('pretty nice out');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('whatever');
}


//challenge 
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan food');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('some vegan food');
} else {
    console.log('anything on the menu');
}