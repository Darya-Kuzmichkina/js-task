// . Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить
// строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование
// регистров toLowerCase, toUpperCase
// hschool -> HsChOoL
function alternateCase(text) {
    const charArray = text.split('');

    const resultArray = charArray.map((arr, i) => {
        return i % 2 === 0 ? arr.toLowerCase() : arr.toUpperCase();
    });

    return resultArray.join('');
}


const inputString = prompt();
const outputString = alternateCase(inputString);
console.log(outputString); 