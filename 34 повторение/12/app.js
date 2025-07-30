// Создай класс RepeatingArray, метод get() → [1, 2, 2, 3, 2, 4].
// Создай наследника MajorityElement, метод get() возвращает элемент, встречающийся чаще всего.
// Пример: 2
class RepeatingArray {
        get() {
                return [1, 2, 2, 3, 2, 4, 3, 3, 3];
        }
}
class MajorityElement extends RepeatingArray {
        get() {
                const arr = super.get();
                let maxCount = 0;
                const counts = {};
                let elCountMax = null;
                for (let num of arr) {
                        counts[num] = (counts[num] || 0) + 1;
                        if (counts[num] > maxCount) {
                                maxCount = counts[num];
                                elCountMax = num;

                        }

                }
                return elCountMax;
        }
}
const majorityElement = new MajorityElement();
console.log(majorityElement.get());
