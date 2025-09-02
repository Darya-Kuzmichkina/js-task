// 4. Создай поле для названия задачи, поле для числа, чекбокс - поле complited (создается как input type
// checkbox) и кнопку "Добавить задачу". По клику на кнопку отправь POST-запрос на
// https://jsonplaceholder.typicode.com/todos со структурой: { "title": ..., "completed": ... (true/ false, значение
// из чекбокса), "userId": ... } Результат создания отобразить в html
document.querySelector('button').addEventListener('click', async () => {
    const title = document.querySelector('.title').value;
    const completed = document.querySelector('.completed').checked;
    const userId = document.querySelector('.userId').value;
    const obj = { "title": title, "completed": completed, "userId": userId }
    try {
        const response = await fetch(" https://jsonplaceholder.typicode.com/todos", {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const res = await response.json();
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.textContent = `${res.title}, ${res.completed}, ${res.userId}`;
        ul.appendChild(li);
    }
    catch (error) {
        console.log(error.message);

    }
});