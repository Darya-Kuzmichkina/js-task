// На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4
const n = prompt();
function fact(n) {
    let res =1;
    for (let i = 1; i <= n; i++) {
       
        res *=i;
    }
    return res;
}
console.log(fact(n)); 
