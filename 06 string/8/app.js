let a = prompt("введите строку");
let n = +prompt("введите число");
if (n > a.length || n < 0) {
   console.log("вышли за диапазон");}
   if (!isNaN(n)) {
      console.log(a[n]);
   }

else {
   console.log("не число");
}