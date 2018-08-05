const todos = [{
    text: 'Exercise',
    completed: true
}, {
    text: 'Practice Javascript',
    completed: true
}, {
    text: 'Practice Java',
    completed: false 
}, {
    text: 'Practice Web Development',
    completed: false
}]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) {
    if (!todo.completed) {
        const newPara = document.createElement('p')
        newPara.textContent = `You have not completed ${todo.text}`
        document.querySelector('body').appendChild(newPara)
    }
})






// const p = document.querySelectorAll('p')

// p.forEach(function(paragraph) {
//     if (paragraph.textContent.includes('four')) {
//         paragraph.remove()
//     }
//     // console.log(p.textContent)
// })