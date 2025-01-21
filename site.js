const firstP = document.querySelector('p')
console.log(firstP)
firstP.textContent = 'Hello'

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'

const contactA = document.querySelector('#contact')
contactA.style.backgroundColor = '#3388ff'

/*const active = document.querySelectorAll('.active')
console.log(active)
active.style.textDecoration = 'underline'*/

//document.body.listener = 
document.title = 'Thane\'s WebPage'

document.addEventListener('click', (e) => {
    //e.target.parentElement.style.border = '2px solid red' // Turns border of sections red when they are clicked.
    const section = e.targer.closest('section')
    section.style.border = '2px solid red'
})