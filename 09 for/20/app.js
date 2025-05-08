
let a = [5, "hello", 15, "world", 25, 3, "test"];
for (let i = 1; i <= 100; i++) {
    if (a[i] == 'string') {
        continue
    }
    if (!isNaN(a[i]) && a[i] < 10) {
        console.log("Маленькое число");

    }
    if (!isNaN(a[i]) && a[i] >= 10 && a[i] <= 20) {
        console.log("Среднее число");

    }
    if (!isNaN(a[i]) && a[i] > 20) {
        console.log("Большое число");

    }

}