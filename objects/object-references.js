let myAccount = {
    name: 'Homer Simpson',
    expenses: 0,
    income: 0
};

let addExpenses = function (account, amount) {
    account = {}
    // account.expenses = account.expenses + amount;
    console.log(account);
}

addExpenses(myAccount, 2.50);
console.log(myAccount)