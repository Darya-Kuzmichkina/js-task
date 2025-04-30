let a = +prompt("Введите число");

if (!Number.isNaN(a)) {
    let b = Math.sqrt(a);
    // if (Number.isInteger(b)) {
    //     console.log(b);
    // }
    // else {
    //     console.log(b.toFixed(0));
    // }
    console.log(Number.isInteger(b) ? b : b.toFixed(0));
}
else {
    console.log("не число");
}