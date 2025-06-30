// Создайте функцию, которая принимает массив строк и выводит, сколько слов
// имеют длину 3 или 4 и т.д.
// ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]); // Вывод: 7

const countWord=()=> {
    const arr = ["cat", "lion", "dog", "elephant", "bat", "fox", "wolf", "bee"]
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 3 || arr[i].length === 4) {
            count++;
        }
    }
    console.log(count);
}

countWord();