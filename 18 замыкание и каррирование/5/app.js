// Создай hasLength(n)(str) — она проверяет, имеет ли строка длину n.
function hasLength(str) {
   return function(n){
    console.log(  str.length >= n ? true : false );
    
   }
   
}
hasLength(prompt())(prompt())