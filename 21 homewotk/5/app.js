// При нажатии на кнопку у прямоугольного блока меняется цвет фона на
//  случайный из const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta" ];.
const colors = [ "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta" ];
const button =  document.querySelector('button');
const block= document.querySelector('div');
button.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random() * colors.length);
            block.style.backgroundColor = colors[randomIndex];
})