// На входе n — число. Реализуйте 2 функции: factorial() — возвращает факториал
// числа, printFactorial() — выводит факториал.
// const factorial=(n)=>{
//     if (n<=1) return 1;
//  else{   fact=n* factorial(n-1);
// return fact;
//  }
// };
// const printFactorial= ()=> {
//      const n = prompt();
//     console.log(` факториал ${n} : ${factorial(n)}`);
    
// }
// printFactorial();

const factorial=(n)=>{
    let res=1;
   for (let i = 0; i <= n; i++) {
    
    res *=i;
   }
   return res;
};
const printFactorial= ()=> {
     const n = prompt();
    console.log(` факториал ${n} : ${factorial(n)}`);
    
}
printFactorial();