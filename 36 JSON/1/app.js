// 1. Создай кнопку "Загрузить посты". При клике на кнопку сформируй GET-запрос на
// https://jsonplaceholder.typicode.com/posts и выведи список заголовков постов
const button = document.querySelector('button');
const p = document.querySelector('p');
button.addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' });
    const inf = await response.json();
    const res = inf.forEach(el => {
        const li = document.createElement('li');
        li.textContent = el.title;
        const list = document.querySelector('ul');
        list.appendChild(li)
    });
});
