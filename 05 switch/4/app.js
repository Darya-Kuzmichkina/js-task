let num = +prompt("Введите число");
if (!Number.isNaN(num)) {

    if (num > 0) {
        console.log(num, "положительно");
    }
   else if (num <0) {
        console.log(num, "отрицательно");
    }
    else{
        console.log(num);
    }
}
else{
    console.log(num, "не число");
}