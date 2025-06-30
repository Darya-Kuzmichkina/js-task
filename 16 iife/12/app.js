//  Подсчитать количество положительных и отрицательных чисел
function countPositivesAndNegatives() {
    const input = prompt();
    const arr = input.split(",").map(Number);
    let positives = 0;
    let negatives = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        }
    }
    console.log(`Положительных: ${positives}, Отрицательных: ${negatives}`);
}

countPositivesAndNegatives();