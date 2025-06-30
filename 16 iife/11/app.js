// Найти и вывести наибольшее число
function findMax() {
    const input = prompt();
    const arr = input.split(",").map(Number);
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    console.log(maxNum);
}

findMax();