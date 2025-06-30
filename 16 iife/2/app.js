// Напишите IIFE-функцию, принимающую строку и число. Внутри функции
// выведите в console.log строку, повторённую указанное количество раз.
// "Hi!", 3 // Ожидаемый вывод: "Hi!Hi!Hi! "
(function(str,num){
    console.log(str.repeat(num));
     
    
}) (prompt(),prompt())