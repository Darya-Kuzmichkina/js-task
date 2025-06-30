// Напишите функцию, которая принимает статичный массив строк. Необходимо отфильтровать
// значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
const arr=[];

for (let i = 0; i < 5; i++) {
  arr[i]= prompt();
  
}
function doRes(arr) {
    
    const res1= arr.filter(function (str) {
      return str.length <=2;
    });



      console.log(res1);
    
    
    
}
doRes(arr);