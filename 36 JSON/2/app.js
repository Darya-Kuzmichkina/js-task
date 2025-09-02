// 2. Создай поле для для ввода текста и кнопку "Создать". При клике на кнопку отправь POST-запрос
// на https://jsonplaceholder.typicode.com/posts со следующей структурой данных в body: { "title":
// "Введенный заголовок", "body": ..., "userId": 1 }
const button = document.querySelector('button');
const input = document.querySelector('input');
button.addEventListener('click', async () => {
    const date = {
        "title": "Введенный заголовок",
        "body": input.value,
        "userId": 1
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(date)

    })
    const res = await response.json();
    console.log(res);
})
