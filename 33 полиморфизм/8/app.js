// Создайте родительский класс NumberArrayGenerator, который будет генерировать массив чисел
// от 1 до 8 с помощью метода generateArray(). Затем создайте дочерний класс EvenNumberFilter,
// который переопределяет метод generateArray() и оставляет в массиве только чётные числа.
// Входные: new EvenNumberFilter().generateArray() → Результат: [2, 4, 6, 8]
class NumberArrayGenerator {
    arr = [];
    generateArray() {
        for (let i = 1; i <= 8; i++) {
           this.arr.push(i); 
        }
        return this.arr;
    }
    
}


class EvenNumberFilter extends NumberArrayGenerator {
    generateArray() {
      
return super.generateArray().filter(el=> el%2===0)
    }
}

const evenNumberFilter= new EvenNumberFilter();
console.log(evenNumberFilter.generateArray());
