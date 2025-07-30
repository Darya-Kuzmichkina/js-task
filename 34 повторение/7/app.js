// Создай класс SentenceList, метод get() → ["my cat", "your dog", "wildcat", "mouse"].
// Создай наследника CatFilter, метод filterData(), который возвращает строки, содержащие "cat".
// Ожидаемый результат: ["my cat", "wildcat"].

class SentenceList{
    get(){
        return ["my cat", "your dog", "wildcat", "mouse"];
    }
}
class CatFilter extends SentenceList{
   filterData(){
return this.get().filter(el=> el.includes("cat"));
    }
}
const cat= new CatFilter();
console.log(cat.filterData());
