//На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//Используя метод some, вывести true, если хотя бы один элемент массива является числом.
let n = prompt();
let arr=[];
for (let i = 0; i < n; i++) {
    arr.push(prompt());
    
}
const res= arr.some(function(el){
 return !isNaN(el)});
    console.log(res);
    