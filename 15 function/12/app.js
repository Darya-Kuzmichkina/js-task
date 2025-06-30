// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для поиска максимального значения в массиве. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую максимальное значение массива
const pushArr=(arr)=> {
    for(let i = 0; i<5;i++){
        arr.push(+prompt());
    }
    const res = arr.every((el) => {
        if(!isNaN(el)) return true;
        else return false;
    });
   if( res==true){
   let findMax = arr.reduce((max,el)=> {
    return el > max ? el : max;
   },- Infinity);
   return findMax;
   } else return false;
}
const array = [];
const resOne=pushArr(array);

console.log(resOne);




