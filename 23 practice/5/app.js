// У элемента есть кнопка "Подробнее" — по клику добавляйте абзац с описанием.
const button = document.querySelector('button');
const p = document.querySelector('p');
button.addEventListener('click',()=>{
   if(p.style.display==='none')
   p.style.display='block';
else {p.style.display='none';}
})