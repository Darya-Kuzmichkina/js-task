// По умолчанию размер текста у параграфа 20px. При каждом клике на кнопку 
// стоящую рядом с параграфом текст увеличивается на 2 пикселя.
//  Подсказка: узел.style = 'font-size:' + ... + 'px'
const button = document.querySelector('button');
const p = document.querySelector('p');
let fontSize = 20;
       p.style.fontSize = fontSize + 'px';
button.addEventListener('click', ()=>{
            fontSize += 2; 
            p.style.fontSize = fontSize + 'px'; 
});