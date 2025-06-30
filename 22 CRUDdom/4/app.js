// Найдите на странице элемент <h1> и замените его на новый заголовок <h2> с текстом «Новый
// заголовок».
const H1 = document.querySelector('h1');
const H2 = document.createElement('h2');
const Div = document.querySelector('div');
H2.textContent= 'Новый заголовок';
Div.replaceChild(H2,H1);