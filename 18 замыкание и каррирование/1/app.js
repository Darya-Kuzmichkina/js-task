// Создай функцию greet(greeting)(name), которая выводит строку вида: "Привет,
// Аня"
 function greet (greeting){
    return function (name){
        console.log(`${greeting}, ${name}`);
        
    }
 }
 greet("привет")('Даша')