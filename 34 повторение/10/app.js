//  Создай класс TextCleaner, метод clean(text) удаляет знаки препинания и приводит текст к нижнему регистру.
// Пример: "Hello, World!" → "hello world".
// Создай наследника WordCounter, метод count_words(text) возвращает количество слов.
// Пример: "Hello, World!" → 2.
class TextCleaner {
    clean(text) {
        let str = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== "," && text[i] !== "." && text[i] !== "!" && text[i] !== "?" && text[i] !== ":") {
                str += text[i].toLowerCase();
            }
        }
        return str;
    }
}
class WordCounter extends TextCleaner {
    count_words(text) {
        const str = this.clean(text);
        let count = 0;
        let word = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                if (word) {
                    word = false;
                }

            }
            else {
                if (!word) {
                    word = true;
                    count++
                }
            }

        }
        return count;
    }
}
const wordCounter = new WordCounter();
console.log(wordCounter.count_words("Hello, World!"));
