// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст
// должен показываться или скрываться.
const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
  if (h2.style.display==='block'){
    h2.style='display:none';
  }
  else h2.style='display:block';
})

