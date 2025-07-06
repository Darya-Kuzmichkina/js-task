// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке 
const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');
let arr=[];
button.addEventListener('click',()=>{
    try {
       if(!input.value.trim()) throw new Error('error');
       if(isNaN(input.value)) throw new Error('error');
       if(input.value<0) throw new Error('error');
arr.push(input.value);
input.value="";
p.textContent= `result: ${arr}`;
    } catch (error) {
        p.textContent=`result: ${error}`;
    }
})