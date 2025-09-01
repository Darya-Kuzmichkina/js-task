// 8. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://official-joke-api.appspot.com/random_joke, получала от сервера случайную шутку в
// формате JSON и отображала её на странице в удобочитаемом виде.
const button= document.querySelector('button');
const p= document.querySelector('p');
button.addEventListener('click', async()=>{
    const response= await fetch('https://official-joke-api.appspot.com/random_joke',{method:'GET'});
    const info= await response.json();
    return p.textContent=info.setup;
})