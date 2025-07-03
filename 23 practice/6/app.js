// По нажатию на кнопку создайте и покажите изображение с заданным src
const button = document.querySelector('button');
const img = document.querySelector('img');
button.addEventListener('click',()=>{
  img.style.display='block';
})