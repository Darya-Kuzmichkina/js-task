// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, 
const str = prompt();
function checkStr(str) {
 const str2= str.replaceAll(/[0-9#@:.]/g,"");
    if(str.length!== str2.length) console.log(true);
    else console.log(false);

}    
checkStr(str);
