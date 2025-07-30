//  Создай класс VerbList, метод get() → ["running", "eat", "walking", "sleep"].
// Создай наследника IngFilter, метод get(), который возвращает ["running", "walking"]- элементы длина которых больше 6 символов.
class VerbList{
    get(){
        return ["running", "eat", "walking", "sleep"];

    }
}
class IngFilter extends VerbList{
    get(){
const res= super.get().filter(el=>el.length>6);
return res
    }
}
const ingFilter = new IngFilter();
console.log(ingFilter.get());

