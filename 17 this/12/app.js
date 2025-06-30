// На входе str — строка. Реализуйте 2 функции: reverseStr() — возвращает
// перевёрнутую строку, printReversed() — выводит перевёрнутую строку
const reverseStr =(str)=>
{
    return str.split("").reverse().join("");

};
const printReversed =(str)=>{

    console.log(`${reverseStr(str)}`);
    
};
printReversed("привет");