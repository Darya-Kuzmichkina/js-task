// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения
// количества элементов массива
const n = prompt();
function pushArray (arr){
for (let i = 0; i < n; i++) {
   arr.push(prompt());
    
}
return arr;
}
let count =0;
function countEl(arr){
   for (let i = 0; i < arr.length; i++) {
count++;
   }
   return count;
}
const array=[];
const newArr = pushArray(array);
const res = countEl(newArr);
console.log(res);
console.log(newArr);


