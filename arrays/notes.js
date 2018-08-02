// const notes = ['note 1', 23, true]

// notes.push('my new note')
// notes.pop()

// notes.shift()
// notes.unshift('my first note')

// console.log(notes.length)

//notes.splice(1, 0, 'this is the new second item')

// notes[2] = 'this is now the new note 3'

// console.log(notes)

// console.log(notes[0])
// console.log(notes[notes.length -2])

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

// // counting... 1 
// for (let count = 0; count <= 2; count++) {
//      console.log(count)
// }

// for (let count = notes.length -1; count >= 0; count--) {
//     console.log(notes[count])
// }

// console.log(notes.indexOf(23))

const notes = [{
    title: 'My next trip', 
    body: 'I would like to go to Japan'
}, {
    title: 'Habits to work on',
    body: 'Exercise more. Diet.'
}, {
    title: 'Study',
    body: 'JavaScript, Java, Python, Django, Photoshop, Vue, React, etc.'
}]

console.log(notes.length)
console.log(notes)

const myIndex = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})

console.log(myIndex)