// Создай класс WordExtractor, метод get_words(text) возвращает уникальные слова из текста.
// Пример: "hi hello hi" → ["hi", "hello"].
// Создай наследника WordLengths, метод get_words(text) возвращает список длин этих слов.
// Пример: [2, 5].
class WordExtractor {
    get_words(text) {
        const words = [];
        let currentWord = '';

        for (let el of text) {
            if (el === ' ') {
                if (currentWord.length > 0) {
                    words.push(currentWord); 
                    currentWord = ''; 
                }
            } else {
                currentWord += el; 
            }
        }

       
        if (currentWord.length > 0) {
            words.push(currentWord);
        }

      
        const uniqueWords = [];
        for (let word of words) {
            if (!uniqueWords.includes(word)) {
                uniqueWords.push(word);
            }
        }

        return uniqueWords;
    }
}

class WordLengths extends WordExtractor {
    get_words(text) {
        const words = super.get_words(text);
        return words.map(word => word.length); 
    }
}


const wordLengths = new WordLengths();
console.log(wordLengths.get_words("hi hello hi"));