// На входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
// Входные: 2, 5 → Результат: 32
// Входные: 3, 4 → Результат: 81

function powNum(n,step){
if (step===0) return 1
return n* powNum(n,step-1);

}
 const res=powNum(2,5);
console.log(res);
