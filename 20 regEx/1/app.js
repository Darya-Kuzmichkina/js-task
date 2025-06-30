// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать
const str = prompt();
function checkStr(str) {
    if(/[0-9]+/.test(str)) console.log(true);
    else console.log(false);
    
}
checkStr(str);