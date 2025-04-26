let a = +prompt("Введите число");

 
if( a >= 0 && a<=18){
   console.log("Детство");
 
}
else if( a >= 19 && a<=40){
  console.log("Молодость");

}
else if( a >= 41 && a<=100){
  console.log("Зрелость");

}

else {
  console.log("некорректрый ввод");

}