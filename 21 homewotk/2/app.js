// При клике на кнопку текстовый блок появляется или скрывается.
const button= document.querySelector('button');
const p= document.querySelector('p');

button.addEventListener('click', ()=>{
    if(p.style.display==='none') p.style.display='block';
    else p.style.display='none';
})