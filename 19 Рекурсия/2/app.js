// Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
let str ="";
function stringNum(n) {
  if(n<0) return;
 
  if(n%2===0){
    str += n + " ";
  }
  stringNum(n-1);
}
stringNum(5);
console.log(str);
