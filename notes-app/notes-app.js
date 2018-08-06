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

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title 
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    // console.log('Did this work?')
    // console.log(e)
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    // console.log(e.target.value)
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#for-fun').addEventListener('change', function(e) {
    e.target.checked
})


// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// DOM - Document Object Model 

// Query and remove 
// const p = document.querySelector('p')
// p.remove()

// Query all and remove 
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     p.textContent = '*******'
//     // console.log(p.textContent)
//     // p.remove()
// })

// Add a new element 
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)