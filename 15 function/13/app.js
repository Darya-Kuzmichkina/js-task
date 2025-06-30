// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для получения произведения всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую произведение
// всех элементов массива
const pushArr = (arr) => {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}
const resNum = (arr) => {
    const res = arr.every((el) => {
        if (!isNaN(el)) return true;
        else return false;
    });
    return res;
}
const prodNum = (arr) => {
    if (resNum(arr)) {
        const product = arr.reduce((sum,el) => {

return sum*el;
},1)
return product;
    }
    else return false;
}
const n = +prompt();
let array = [];
const answer=pushArr(array);
console.log(answer);
const answer2 = prodNum(answer);
console.log(answer2);



