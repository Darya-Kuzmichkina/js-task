// Создайте форму с выпадающим списком для выбора единицы измерения
// (например, дюймы, сантиметры, метры). При выборе единицы измерения
// отображайте соответствующее значение в консоли.
const list = document.querySelector('ul');
const button = document.querySelector('button');

let flag = false;

button.addEventListener('click', () => {
    if (!flag) {
        list.style.display='block';
    flag=true;
   }
   else{
     list.style.display='none';
    flag=false;
   }
});
list.addEventListener('click', (event) => {
    console.log(event.target);
    
    });