// Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString,
// переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и
// метод upperEvery, который делает заглавной первую букву каждого слова этой строки.
class WordString{
    str = prompt();
    reverseString(){
console.log(this.str.split("").reverse().join(""));

    }
    upperFirst(){
        console.log(this.str[0].toUpperCase()+this.str.slice(1));
        
    }
    upperEvery(){
       return this.str.split('').map(el=>{
        return (el[0].toUpperCase()+el.slice(1)).join('');
        })
    }
}
const wordString = new WordString();
wordString.reverseString();
wordString.upperFirst();
console.log(wordString.upperEvery());