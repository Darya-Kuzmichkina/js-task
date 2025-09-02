// 6. Создай поле для ID поста и кнопку "Удалить". При клике на кнопку отправь DELETE-запрос на
// https://jsonplaceholder.typicode.com/posts/{id} и выведи сообщение об успехе.
const input = document.querySelector('input')
document.querySelector('button').addEventListener('click', async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`, { method: 'DELETE' });
    const res = await response.json();
    console.log(res);

})