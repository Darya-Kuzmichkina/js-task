//Пользователь вводит два массива чисел. Используя оператор spread, объедините 
// эти два массива в один.
// Ввод первого массива
let firstArrayInput = prompt("Введите элементы первого массива, разделенные запятыми:");
let firstArray = firstArrayInput.split(",").map(Number);

// Ввод второго массива
let secondArrayInput = prompt("Введите элементы второго массива, разделенные запятыми:");
let secondArray = secondArrayInput.split(",").map(Number);

// Объединение массивов с использованием оператора spread
let combinedArray = [...firstArray, ...secondArray];

// Вывод результата
console.log("Первый массив:", firstArray);
console.log("Второй массив:", secondArray);
console.log("Объединенный массив:", combinedArray);