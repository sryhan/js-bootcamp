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

// 1. the first item
// 2. the second item 

todos.forEach(function (item, index) {
    console.log(`${index+1}. ${item}`)
})

for (let count = 0; count < todos.length; count++) {
    console.log(`${count + 1} ${todos[count]}`)
}