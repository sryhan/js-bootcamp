// javascript uses lexical scoping (status scope)
// global scope and local scope 

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
}

