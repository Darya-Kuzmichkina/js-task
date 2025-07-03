// Пользователь вводит текст в input и нажимает кнопку — добавляйте этот комментарий в
// список ul расположенный ниже
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
button.addEventListener('click',()=>{
  let li= document.createElement('li');
li.textContent= input.value;
ul.appendChild(li);
})