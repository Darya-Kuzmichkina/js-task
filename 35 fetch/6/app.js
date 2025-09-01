// 6. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://dog.ceo/api/breeds/image/random, получала от сервера ответ со случайной
// фотографией собаки и отображала это изображение на странице
const button = document.querySelector('button');
const img = document.querySelector('img');
button.addEventListener('click',async()=>{
       const response = await fetch(`https://dog.ceo/api/breeds/image/random`, { method: 'GET' });
            const info = await response.json();
            return img.src= info.message
})
