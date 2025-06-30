// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true
const str = prompt();
function checkStr(str) {
    if(/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(str)) console.log(true);
    else console.log(false);
    
}
checkStr(str);