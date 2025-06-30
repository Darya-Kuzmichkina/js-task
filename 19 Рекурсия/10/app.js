// На входе целое число n. Найдите сумму цифр числа с использованием рекурсии.
// Входные: 123 → Результат: 6
// Входные: 456 → Результат: 15
// Входные: 987 → Результат: 24
const n = prompt().split('');

const sumN = (str) => {
    if (str.length === 0) return 0; 
    const lastDigit = +str[str.length - 1];
    return lastDigit + sumN(str.slice(0, str.length - 1)); 
};

console.log(sumN(n)); 