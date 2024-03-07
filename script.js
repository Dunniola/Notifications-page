const red = document.querySelectorAll('.red')
const containerOne = document.querySelector('.containerOne')
const containerTwo = document.querySelector('.containerTwo')
const containerThree = document.querySelector('.containerThree')
const blue = document.querySelector('.blue')


const aside = document.querySelector('.aside').addEventListener('click', (e) =>{
    red.forEach(function(red){
        red.style.visibility = 'hidden'
    containerOne.style.backgroundColor = 'white'

    containerTwo.style.backgroundColor = 'white'

    containerThree.style.backgroundColor = 'white'

    blue.textContent = '0'
    })
})