// 9. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://randomuser.me/api/, получала от сервера данные случайного пользователя и
// отображала основную информацию на странице (например: полное имя, email, телефон).
const button= document.querySelector('button');
const p= document.querySelector('p');
button.addEventListener('click', async()=>{
    const response= await fetch('https://randomuser.me/api/',{method:'GET'});
    const inf= await response.json();
    return p.textContent=inf.info;
})