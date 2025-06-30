//. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//Вывести произведение всех элементов массива. Добавить проверку на ввод только чисел.
//Использовать методы forEach или reduce.


let n = prompt();
let arr=[];
for (let i = 0; i <n; i++) {
    arr.push(prompt());
    
}
console.log(arr);
sum =1;
arr.forEach(function(el) {
  
     sum *= el;
  

});
console.log(sum);
// Вычисление произведения всех элементов
// const product = arr.reduce(function (acc, el) {
//     return acc * el;
// }, 1);

// console.log(product);