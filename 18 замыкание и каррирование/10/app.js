// greaterThanX(x) возвращает функцию, которая проверяет, больше ли переданное
// значение x.
function greaterThanX(x) {
    return function(y){
        console.log(y>x ? true : false);
        
    }
}
greaterThanX(prompt())(prompt())