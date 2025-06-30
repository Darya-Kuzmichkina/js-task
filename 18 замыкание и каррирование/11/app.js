// Создай rememberNumber(n) — возвращает функцию, которая просто выводит в
// консоль это число при каждом вызове. 
function rememberNumber(n) {
    return function(){
        console.log(n);
        
    }
}
 const num =rememberNumber(42);
 num();
 num();
 num();