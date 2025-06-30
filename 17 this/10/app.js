// На входе n — число. Реализуйте 2 функции: isEven() — возвращает true/false,
// printEvenCheck() — выводит, чётное ли число.

isEven =(n)=> {
    return n%2==0;

}
const printEvenCheck =()=>{
    const n = prompt();
    console.log(`${n} ${isEven(n) ? "четное" : "нечетное"}`);
    
};
printEvenCheck();