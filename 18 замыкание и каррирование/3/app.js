// Сделай функцию multiply(a)(b)(c), которая выводит результат a * b * c
function multiply(a) {
  return function(b){
    return function (c){
      console.log(a*b*c);
      
    }
  }
}
multiply(10)(2)(4);