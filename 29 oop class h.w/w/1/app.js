// Создайте класс StringReverser с методом reverseString(str), который переворачивает строку.
class StringReverser{
    reverseString(str){
        console.log(str.split('').reverse().join(''));
        
    }
}
const stringReverser = new StringReverser();
stringReverser.reverseString(prompt());