//  На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе
// стороны), используя рекурсию.
// Входные: "madam" → Результат: True
// Входные: "hello" → Результат: False
// Входные: "racecar" → Результат: True
const s= prompt();
palindron =(s) =>{
    if(s.length<1){
        return true;
    }
    if(s[0]!==s[s.length-1]){
        return false;
    }
    return palindron(s.slice(1,s.length-1));
}
console.log(palindron(s));