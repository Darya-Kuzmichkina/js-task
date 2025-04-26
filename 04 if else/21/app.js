let a = +prompt("Введите 1 число");
let b = +prompt("Введите 2 число");
let c = +prompt("Введите 3 число");

let d = b ** 2 - 4 * a * c;
let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);
if (d === 0) {
  console.log(-b / (2 * a));
}
else if (d > 0) {
  if (x1 <x2) {
    console.log(x1);
    console.log(x2);
  }
  else {
    console.log(x2);
    console.log(x1);
  }
}
else {
  console.log("корней нет");
}



