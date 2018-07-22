let myBook = {
    title: 'Cannery Row', 
    author: 'John Steinbeck',
    pageCount: 208
};

// console.log(`The title of the book is '${myBook.title}' and the author is ${myBook.author}`);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'East of Eden';

console.log(`${myBook.title} by ${myBook.author}`);


// challenge
// name, age, location 

let person = {
    name: 'Homer Simpson', 
    age: 44,
    location: 'Springfield, USA'
}

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)

