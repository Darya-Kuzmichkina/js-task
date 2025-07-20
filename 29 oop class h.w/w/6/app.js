// Класс ArraySummer, в конструктор передаётся массив чисел. Сразу после создания объекта считается сумма и выводится.
class ArraySummer {
    constructor(numbers) {
        this.numbers = numbers; 
        this.sum = this.calculateSum(); 
        console.log(this.sum); 
    }

    calculateSum() {
        return this.numbers.reduce((acc, el) => acc + el, 0); 
    }
}


const arraySummer = new ArraySummer([1, 2, 3, 4, 5]); 