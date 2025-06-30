// По нажатию на кнопку поменять местами значения 2 инпутов. 
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    const rightInp = document.querySelector('#right');
    const leftInp = document.querySelector('#left');
    let rightInpValue= '!!!';
    let leftInpValue= '???';
    leftInp.value=rightInpValue;
    rightInp.value=leftInpValue;

})