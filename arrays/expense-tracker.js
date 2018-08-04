const account = {
    name: 'Abe Lincoln',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: amount,
            amount: amount
        })
    },
    addIncome: function(job, yourIncome) {
        this.income.push({
            Job: job,
            Income: yourIncome
        }) 
    },
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        let totalIncome = 0
        this.income.forEach(function (theIncome) {
            totalIncome = totalIncome + theIncome.Income
        })

        return `${this.name} has a balance of ${totalIncome - totalExpenses}. He has $${totalIncome} in income and $${totalExpenses} in expenses`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Abe Lincoln has $1250 in expenses. 

// 1. add income array to acount
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary
// Abe Lincoln has a balance of $10, $100 in income and $90 in expenses. 


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000) 
console.log(account.getAccountSummary())

console.log(account)