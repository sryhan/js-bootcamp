// let person = {
//     name: 'Abe Lincoln',
//     age: 54,
//     location: 'Washington, D.C.'
// }
// console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
// person.age++
// console.log(`${person.name} is ${person.age} and lives in ${person.location}`)


// let tempConvert = function(temperature) {
//     f2c = (temperature - 32) * (5/9)
//     f2k = ((5/9) * (temperature - 32)) + 273
//     return {
//         fah2cel: `Temperature from ${temperature} F is ${f2c} C`,
//         fah2kel: `Temperature from ${temperature} F is ${f2k} K`
//     }
// }
// let convert = tempConvert(74)
// console.log(convert.fah2kel)



// let myAccount = {
//     name: 'Abe Lincoln',
//     expenses: 0,
//     income: 0
// }
// let addExpense = function(account, amount) {
//     account.expenses = account.expenses + amount
// }
// let addIncome = function(account, amount) {
//     account.income = account.income + amount
// }
// let resetAccount = function(account) {
//     account.expenses = 0,
//     account.income = 0
// }
// let getAccountSummary = function(account) {
//     let balance = account.income - account.expenses
//     return `${account.name} has $${balance}. $${account.income} in income, $${account.expenses} in expenses`
// }
// addIncome(myAccount, 400)
// console.log(getAccountSummary(myAccount))
// resetAccount(myAccount)
// console.log(getAccountSummary(myAccount))


// let restaurant = {
//     name: 'HipsterJoint',
//     guestCapacity: 50,
//     guestcount: 0,
//     checkAvailability: function(partySize) {
//         let seatsLeft = this.guestCapacity - this.guestcount
//         return partySize <= seatsLeft
//     },
//     seatParty: function(partySize) {
//         this.guestcount = this.guestcount + partySize
//     },
//     removeParty: function(partySize) {
//         this.guestcount = this.guestcount - partySize
//     }
// }
// restaurant.seatParty(43)
// console.log(restaurant)


// let isValidPass = function(password) {
//     if (password.length < 8 || password.includes('password')) {
//         return false
//     }
//     return true
// }
// console.log(isValidPass('fj3jf9283gpassword'))


let guess = function(theGuess) {
    let min = 1
    let max = 6
    let userGuess = Math.floor(Math.random() * (max-min) + min)
    if (theGuess === userGuess) {
        return true
    }
    return false
}

console.log(guess(3))