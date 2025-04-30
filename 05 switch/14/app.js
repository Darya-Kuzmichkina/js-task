let a = +prompt("Введите число");
let b = +prompt("Введите число");
let c = +prompt("Введите число");

if (a + b > c && a + c > b && b + c > a) {

    if (a === b === c) {
        console.log("Равносторонний");

    }
    else if (a === b || a === c || b === c) {
        console.log("Равнобедренный");
    }
    else {
        console.log("Разносторонний");
    }
}
else {
    console.log("Треугольник не существует");
}




