let a = +prompt("Введите число");

let b = Math.sqrt(a);
if(Number.isInteger(b)){
  console.log(b);
}
  else{
    console.log( b.toFixed(0));
  }
