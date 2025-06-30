// Создай greaterThan(x)(y), которая проверяет, больше ли y, чем x
function greaterThan(x) {
  return function(y){
    if(y>x) console.log("y>x");
    else if (y<x) console.log("y<x");
    else console.log("y=x");
    
    
  }
}
greaterThan(prompt())(prompt());