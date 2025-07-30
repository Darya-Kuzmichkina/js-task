// Создайте класс TwoSum, который будет принимать массив целых чисел nums и целое число target.
// Реализуйте метод findIndices(), который возвращает индексы двух чисел, сумма которых равна
// target. Гарантируется, что существует ровно одно решение, и вы не можете использовать один и
// тот же элемент дважды.
// Условия:
// • Массив nums содержит только целые числа.
// • Вы можете вернуть индексы в любом порядке.
// • Для каждого набора входных данных существует ровно одно решение.
//Входные: new TwoSum([2, 7, 11, 15], 9) → Результат: [0, 1]
//Объяснение: Поскольку nums[0] + nums[1] == 9, мы возвращаем [0, 1]
class TwoSum {
    constructor(num, target) {
        this.num = num;
        this.target = target;
    }
    findIndices() {

        for (let i=0; i < this.num.length; i++) {
            for (let f=0; f < this.num.length; f++) {
                if (this.num[i] + this.num[f] === this.target) {
                    return [i, f]
                }
            }
        }
    }
}
const sum = new TwoSum([2, 7, 11, 15], 9);
console.log(sum.findIndices());
