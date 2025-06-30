// Создай функцию secretMessage(msg), которая возвращает другую функцию. При
// вызове она выводит msg.
function secretMessage(msg) {
  return function(){
        console.log(msg);
        
    }
    
}
secretMessage(prompt())();