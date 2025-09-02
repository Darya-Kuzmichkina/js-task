// Создай поля для name и email, и кнопку "Создать пользователя".
//  При клике на кнопку отправь POSTзапрос на https://reqres.in/api/users и выведи ID и дату создания.Добавить валидацию на ввод
const inputName = document.querySelector('.inputName')
const inputEmail = document.querySelector('.inputEmail')
document.querySelector('button').addEventListener('click', async () => {
     try {
          const date = {
               'email': inputEmail.value,
               'name': inputName.value
          }
          if (inputName.value == '') throw new Error('error')
          if (inputEmail.value == '') throw new Error('error')
          const response = await fetch('https://reqres.in/api/users', {
               method: 'POST', headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(date)
          });
          const res = await response.json();
          console.log(res);
     } catch (error) {
          console.log(error.message);
     }
})