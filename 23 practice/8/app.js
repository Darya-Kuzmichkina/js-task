// Дополните 7 задачу кнопкой "Очистить всё", которая удаляет все <li> из списка.
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
button1.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent= input.value;
    ul.appendChild(li);
});
button2.addEventListener('click',()=>{
 ul.innerHTML=''
    ul.removeChild(li);
});