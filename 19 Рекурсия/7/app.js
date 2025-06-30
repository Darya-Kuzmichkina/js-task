// Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10
// Входные: [10, 20, 30] → Результат: 60

function sumEl(arr,i) {
if (i===arr.length) return 0;
return arr[i] +sumEl(arr,i+1);
}
const res= sumEl([1, 2, 3, 4],0);
console.log(res);
