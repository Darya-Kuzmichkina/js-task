// Создайте класс DuplicateRemover с методом removeDuplicates(arr), который убирает дубликаты. Использовать метод new Set()
class DuplicateRemover {
    removeDuplicates(arr) {
        const uniqueSet = new Set(arr);
        return uniqueSet; 
    }
}


const remover = new DuplicateRemover();
const result = remover.removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result); 