let todos = ['drive', 'exercsie', 'javascript', 'java', 'web development']

console.log(`You have ${todos.length} todos`)
console.log(`Your first todo is to ${todos[0]}`)
console.log(`Your second todo is to ${todos[1]}`)

//delete 3rd item
//add a new item to the end 
// remove the first item from the list 

todos.splice(2,1)
todos.push('javascript')
todos.shift()
console.log(todos)
