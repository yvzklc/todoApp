const addButton = document.getElementById('add')
const input = document.querySelector('#input')
const day = document.querySelector('.day')
const ul = document.getElementsByTagName('ul')

const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.textContent = dayName[new Date().getDay()]

addButton.addEventListener('click',()=>{
    const li = document.createElement('li')
    const p = document.createElement('p')
    const task = document.createElement('span')
})