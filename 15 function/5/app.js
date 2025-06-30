// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
// Функция возвращает true, если в массиве только числа и false в противном случае
function numbers(num) {
    const arr = num.split(" ");
    const res1= arr.every(function (str) {
      return !isNaN(str);
    });



      console.log(res1);
    
    
}
numbers(prompt());