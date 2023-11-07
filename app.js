const addButton = document.getElementById('add')
const input = document.querySelector('#input')
const  day = document.querySelector('.day')
const ul = document.querySelector('ul')


const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.textContent = dayName[new Date().getDay()] 


addButton.addEventListener('click',()=>{
      

// ? todo lar eklenince oluşacak elemanlarımız
 const li = document.createElement('li')
 const p = document.createElement('p')
 const task = document.createElement('span')
 const deleteButton = document.createElement('button')

//  ? todo lar

ul.appendChild(li)
li.appendChild(p)
li.appendChild(task)
li.appendChild(deleteButton)
const text = document.createTextNode(input.value)
const x = document.createTextNode('X')
// task.appendChild(text)
p.classList.add('circle')
li.classList.add('li')
task.classList.add('task')
deleteButton.classList.add('delete')

// task.textContent = input.value;
// deleteButton.textContent = x
task.appendChild(text)
deleteButton.appendChild(x)
input.value = ''
})