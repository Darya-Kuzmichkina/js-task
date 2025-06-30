// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое
const button = document.querySelector('button');
let arr = [];
button.addEventListener('click', () => {
    try {
        const input = document.querySelector('input');
        const p = document.querySelector('p');
        arr.push(input.value);
        if (arr.length === 0) throw new Error('error');
p.textContent= arr;
    }
    catch(error){
        alert(error.message);
    }

})