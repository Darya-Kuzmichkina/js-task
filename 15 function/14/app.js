// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат
const pushArr = (arr)=> {
    for (let i = 0; i < n; i++) {
        arr.push(+prompt());
    }
    return arr;
}
const resNum = (arr)=> arr.every((el)=> !isNaN(el) );


const newArr = (arr)=>  arr.filter((el)=> el%2==0)
    .map((elem)=>elem**2);

const n = +prompt();
const array =[];
const res1 = pushArr(array);
console.log(res1);
if (resNum(res1)) { 
    const answer2 = newArr(res1);
    console.log("Квадраты четных чисел:", answer2);
} else {
    console.log("Некорректные данные в массиве.");
}

