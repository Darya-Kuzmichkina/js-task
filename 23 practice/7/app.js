// Добавляйте задачи в список <ul> из input, по нажатию на кнопку.
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent= input.value;
    ul.appendChild(li);
})