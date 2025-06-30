// Создай функцию makeMultiplier(x), которая возвращает функцию умножения на x
function makeMultiplier(x) {
    return function (y) {
        console.log(x * y);

    }
}
const res = makeMultiplier(2);
res(5);