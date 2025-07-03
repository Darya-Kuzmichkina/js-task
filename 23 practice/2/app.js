// Есть кнопка — по клику показывайте <div> с тремя абзацами текста
const button = document.querySelector("button");
const div = document.querySelector("div");
button.addEventListener('click',()=>{
    div.style.display='block';
})