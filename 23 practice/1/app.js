// По нажатию на кнопку заменяйте <h1> с "Добро пожаловать" на "Приятно вас видеть".
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button/addEventListener('click',()=>{
    if(h1.textContent==='Добро пожаловать')
        h1.textContent="Приятно вас видеть";
    else h1.textContent='Добро пожаловать';
})