// На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и
// false в противном случае
const str = prompt();
function palindrom(str) {
   
    const str2 = str.split("").reverse().join("");
    if( str == str2)
        return true;
    else return false;
}
console.log(palindrom(str));
