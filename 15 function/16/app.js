// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна
// преобразовать строку в формат “xxxx-xx-xx”. 
function convertDateFormat(date) {
    const parts = date.split('/');
    
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


const inputDate = prompt();
const outputDate = convertDateFormat(inputDate);
console.log(outputDate); 