let num1 = +prompt("Введите 1 число");
let num2 = +prompt("Введите 2 число");
if (Math.abs(num1) == Math.abs(num2)) {
    if (num1 > 0 && num2 > 0 || num1 < 0 && num2 < 0) {
        console.log("Не Противоположные");
    }
    else if (num1 > 0 && num2 < 0 || num2 > 0 && num1 < 0) {
        console.log("Противоположные");
    }
   
}
