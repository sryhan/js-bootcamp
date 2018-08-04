// let todos = ['exercsie', 'javascript', 'java', 'web development']

// console.log(`You have ${todos.length} todos`)
// console.log(`Your first todo is to ${todos[0]}`)
// console.log(`Your second todo is to ${todos[1]}`)

//delete 3rd item
//add a new item to the end 
// remove the first item from the list 

// todos.splice(2,1)
// todos.push('javascript')
// todos.shift()
// console.log(todos)

// 1. the first item
// 2. the second item 

// todos.forEach(function (item, index) {
//     console.log(`${index+1}. ${item}`)
// })

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1} ${todos[count]}`)
// }

// 1. convert array to array of objects -> text, completed
// 2. create function to remove a todo by text value 

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

const sortTodos = function(notes) {
    notes.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)



// const getThingsToDo = function (todos) {
//     return todos.filter(function(todo) {
//         const isCompleted = todo.completed
//         return !isCompleted
//     })
// }

// console.log(getThingsToDo(todos))

// const deleteTodos = function(todos, todoText) {
//     const index = todos.findIndex(function (thisTodo) {
//         return thisTodo.text.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// deleteTodos(todos, 'practice java')
// console.log(todos)