// Пользователь вводит имя в input, и при нажатии на кнопку имя отображается в параграф.
const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click',()=>{
  const p = document.querySelector('p');
  p.textContent=input.value;

})