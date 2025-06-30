//На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//Используя метод every, вывести true, если все элементы массива являются числами, иначе false.
let arr=[];
let n = prompt();
for (let i = 0; i < n; i++) {
    arr.push(prompt());
    
}
const res= arr.every(function(el){
 return !isNaN(el)});
    console.log(res);