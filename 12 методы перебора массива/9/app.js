//На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//Создать новый массив, содержащий только те строки, которые начинаются с символов a или h.
//Проверить ввод только текстовых значений. Использовать метод filter.
let n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    let input = prompt();

    // Проверка на текстовое значение
    if (typeof input === 'string' && input.trim() !== "") {
        arr.push(input);
    } else {
        console.error();
        i--; // Повторить ввод для этого элемента
    }
}

// Создание нового массива с использованием filter
const filteredArr = arr.filter(function(el) {
    return el.startsWith('a') || el.startsWith('h');
});

// Вывод результата
if (filteredArr.length === 0) {
    console.log("Нет строк, начинающихся с 'a' или 'h'.");
} else {
    console.log(filteredArr);
}