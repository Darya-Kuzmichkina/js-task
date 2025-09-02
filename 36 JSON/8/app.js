// Создай поля для ID, name, email и кнопку "Обновить". При клике на кнопку отправь PUT-запрос на
// https://reqres.in/api/users/{id}, в тело передай name, email и выведи в html результат - полные данные
// пользователя
const inputName = document.querySelector('.inputName')
const inputEmail = document.querySelector('.inputEmail')
const inputId = document.querySelector('.inputId')
document.querySelector('button').addEventListener('click', async () => {

    const date = {
        'email': inputEmail.value,
        'name': inputName.value,
        'id': inputId.value
    }
    const response = await fetch(`https://reqres.in/api/users/${inputId.value}`, {
        method: 'PUT', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(date)
    });
    const res = await response.json();
    console.log(res);
})