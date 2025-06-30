// Блок (или кнопка), при наведении (mouseover) меняет цвет. При уходе курсора (mouseout) возвращается обратно.
const button=document.querySelector('button');
button.addEventListener('mouseover',()=>{
button.style.background='red';
})
button.addEventListener('mouseout',()=>{
button.style.background='grey';
})