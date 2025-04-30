let a = +prompt("Введите число");

if (!Number.isNaN(a)) {
   a /= 100;
         console.log(Math.floor(a));
}
else {
    console.log("не число");
}