// Создай класс IntGenerator, метод getNums() возвращает [-3, 1, 4, -1].
// Создай наследника PositiveSum и метод метод getNums(), который находит сумму положительных.
// Ожидаемый результат: 5.
class IntGenerator {
    getNums() {
        return [-3, 1, 4, -1];
    }
}

class PositiveSum extends IntGenerator {
    getNums() {
        
        const res= super.getNums().reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
        console.log(res);
        
    }
}


const positiveSum = new PositiveSum();
positiveSum.getNums(); 