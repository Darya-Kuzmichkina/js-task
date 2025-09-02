// 3. Создай 2 поля для ввода текста, 1 для ввода числа и кнопку "Создать". При клике на кнопку
// отправь POST-запрос на https://jsonplaceholder.typicode.com/posts со следующей структурой
// данных: { "title": ... "body": ..., "userId": ... }. Результат создания отобразить в html
const inputText1 = document.querySelector('.inputText1');
const inputText2 = document.querySelector('.inputText2');
const inputNum = document.querySelector('.inputNum');
const button = document.querySelector('button');
button.addEventListener('click', async () => {
    const date = {
        "title": inputText1.value,
        "body": inputText2.value,
        "userId": inputNum.value
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify(date),

    })
    const res = await response.json();
    const div = document.querySelector('div');
    const p = document.createElement('p');
    p.textContent = `${res.title}, ${res.body}, ${res.userId}`;
    div.appendChild(p)
})
