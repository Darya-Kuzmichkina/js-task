// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных
// элементов массива
const n = prompt();
function createArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt();
    }
    return arr; 
}

function processArray(arr) {
   
    if (arr.every(function(el) {
        return typeof el === "string";
    })) {
        
        const result = arr.join('');
        console.log(result);
    } else {
        console.log(null);
    }
}

const array = createArray(n); 
processArray(array); 