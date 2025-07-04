// Создайте несколько элементов (например, кнопок) на странице. При клике на
// элемент, используйте event.target для определения на какой из элементов
// производилось действие и измените цвет.
const btn = document.querySelectorAll('button');
const p= document.querySelector('p');
btn.forEach(btn =>{

    btn.addEventListener('click',(event)=>{
        p.textContent=event.target.textContent;
        btn.style="background: red";
});
});