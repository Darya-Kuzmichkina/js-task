// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->
const str = prompt();
function checkStr(str) {
    if(/^([0-9]{4}|[0-9]{6})$/.test(str)) console.log(true);
    else console.log(false);
    
}
checkStr(str);