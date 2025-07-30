// Создай класс TextSource, метод get() → "education is powerful".
// Создай наследника VowelCounter, метод get(), который возвращает количество гласных букв.
// Ожидаемый результат: 9.
class TextSource{
    get(){
        return "education is powerful"
    }
}
class VowelCounter extends TextSource{
    get(){
        const str = super.get()
        const vowel= ['a', 'e', 'i', 'o', 'u'];
      let  count =0;
        for (let i = 0; i < str.length; i++) {
            if(vowel.includes(str[i])) count ++
            
        }
        console.log(count);
    }
    
}
const res= new VowelCounter();
res.get()