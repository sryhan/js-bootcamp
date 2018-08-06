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


const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos-left').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos-left').appendChild(summary)
    
    filteredTodos.forEach(function(todo) {
        if (!todo.completed) {
            const newPara = document.createElement('p')
            newPara.textContent = `${todo.text}`
            document.querySelector('#todos-left').appendChild(newPara)
        }
    })
}

renderTodos(todos, filters)

document.querySelector('#filter-todos').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.thisTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.thisTodo.value = ''
})

document.querySelector('#todo-checkbox').addEventListener('change', function(e) {
    e.target.checked
})


// 1. Create a checkbox and setup event listener -> "hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items 

// Listen for new todo creation 
// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log('You clicked the button!')
// })

// List for todo text change
// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })





// const p = document.querySelectorAll('p')

// p.forEach(function(paragraph) {
//     if (paragraph.textContent.includes('four')) {
//         paragraph.remove()
//     }
//     // console.log(p.textContent)
// })