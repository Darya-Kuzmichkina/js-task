// Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку по количеству символов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long
class SentenceRepository {
    arr = ["Hello world", "This is a longer sentence", "Short"]
}
class LongestSentence extends SentenceRepository {
    getLongestSentence() {
        let max = 0;
        for (let i = 0; i < this.arr.length; i++) {
            const res = this.arr[i].split(' ');
            if (res.length > max) {
                max = res.length
            }
        }
        return max
    }
}
const longestSentence = new LongestSentence();
console.log(longestSentence.getLongestSentence());
