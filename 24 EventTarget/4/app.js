// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать
const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
btn.addEventListener('mouseover',()=>{
    h2.style='display:block';
});
btn.addEventListener('mouseout',()=>{
    h2.style='display:none';
});
