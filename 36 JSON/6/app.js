// Создай поле для ID пользователя и кнопку "Найти посты". При клике на кнопку отправь GET-запрос
// на https://jsonplaceholder.typicode.com/posts?userId={id} и выведи заголовки постов этого
// пользователя.
const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', async () => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${input.value}`, { method: 'GET' });
     const inf = await response.json();
     const res = inf.forEach(el => {
          const p = document.createElement('p');
          const div = document.querySelector('div');
          p.textContent = el.title;
          div.appendChild(p)
     });
});