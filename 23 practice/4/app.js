// Есть контейнер в виде карточки товара с кнопкой "Удалить" — по клику убирайте её со
// страницы
const button = document.querySelector('button');
const div = document.querySelector('div');
button.addEventListener('click',()=>{
document.body.removeChild(div);
})