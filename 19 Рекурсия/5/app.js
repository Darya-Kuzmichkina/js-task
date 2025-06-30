// На входе массив array. Посчитайте количество элементов массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 20, 30] → Результат: 3

function countArr(arr){
if (arr.length===0) return 0
  return 1 + countArr(arr.slice(1));


}
 const res=countArr([1, 2, 3, 4]);
console.log(res);
