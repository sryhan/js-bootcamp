let myBook = {
    title: 'Cannery Row', 
    author: 'John Steinbeck',
    pageCount: 208
};

let otherBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
};

let getSummary = function(book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} has ${book.pageCount} pages`
    }
    // console.log(`${book.title} by ${book.author}`)
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);


//Challenge 
//Create function - take fahrenheit in - return object with all 3

fahrenhiet = function(f) {
    f2c = ((f-32)*5) / 9,
    f2k = ((f-32)*(5/9)) + 273.15
    
    return {
        convertedTemp: `${f} fahrenheit to Celcius is ${f2c}, ${f2k} in Kelvin`
    }
}

let f1 = fahrenhiet(32);
console.log(f1.convertedTemp);