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

const sortTodos = function (todos) {
    todos.sort(function (a,b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// getThingsTodo = function(todos, query) {
//     return todos.filter(function (todo, index) {
//         return !todo.completed
        
//     })
// }

// console.log(getThingsTodo(todos))

// deleteTodos = function (todos, todoTitle) {
//     const todo = todos.find(function (todo, index) {
//         return todo.text.toLowerCase() === todoTitle.toLowerCase()
//     })
//     todos.splice(todo,1)
// }

// deleteTodos(todos, 'practice web development')

// console.log(todos)

// const todos = [{
//     title: 'Data',
//     body: 'Sentdex'
// }, {
//     title: 'Find',
//     body: 'In'
// }, {
//     title: 'Green',
//     body: 'Gold'
// }]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.body.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     return notes[index]
// }

// const findNote = function (notes, noteTitle) {
//     return notes.find(function (note, index) {
//         return note.body.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     // return note
// }


// console.log(findNote(todos, 'in'))

// let todos = ['looping', 'callback function', 'objects in memory', 'filtering arrays', 'sorting arrays']

// for(let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`)
// }

// console.log(`You have ${todos.length} todos`)
// todos.forEach(function(item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// let theTodos = function(theseTodos) {
//     console.log(`You have ${theseTodos.length} todos`)
// }
// theTodos(todos)
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)
// todos.splice(2, 1)
// todos.push('const')
// todos.shift()
// console.log(todos)