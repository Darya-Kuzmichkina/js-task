// 5. Нужно создать поле для ввода и кнопку, чтобы при нажатии на неё программа брала
// введённое пользователем имя, выводила его в консоль, а затем подставляла это имя в ссылку
// https://api.nationalize.io/?name=... чтобы отправить GET-запрос и получить от сервера
// информацию о странах, с которыми это имя ассоциируется чаще всего, включая вероятность
// для каждой страны.
 const btn = document.querySelector('button');
        const input = document.querySelector('input');

        btn.addEventListener('click', async () => {
            const response = await fetch(`https://api.nationalize.io/?name=${input.value}`, { method: 'GET' });
            const info = await response.json();
console.log(info);

    
        });