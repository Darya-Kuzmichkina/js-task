//Напишите функцию, которая принимает неограниченное количество аргументов (чисел) и
//возвращает их сумму. Используйте оператор rest для обработки аргументов.
const sum = function(...numbers) {
    return numbers.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
};

// Пример использования
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
console.log(sum()); // 0