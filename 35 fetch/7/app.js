// Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://api.ipify.org?format=json, получала от сервера ответ с вашим текущим IP-адресом
// и отображала его на странице.const button = document.querySelector('button');
const button = document.querySelector('button');
const p = document.querySelector('p');
button.addEventListener('click',async()=>{
       const response = await fetch(`https://api.ipify.org?format=json`, { method: 'GET' });
            const info = await response.json();
            return p.textContent= info.ip;
})