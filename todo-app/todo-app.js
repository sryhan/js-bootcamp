const p = document.querySelectorAll('p')

p.forEach(function(p) {
    if (p.textContent.includes('four')) {
        p.remove()
    }
    // console.log(p.textContent)
})