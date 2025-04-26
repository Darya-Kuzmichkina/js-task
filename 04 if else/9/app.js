let num1 = +prompt("Введите число");
if(num1> 9 && num1<100){
    console.log("Однозначное")
}
else if(num1> 99 && num1 < 1000 ){
    console.log("Двухзначное")
}
else if(num1> 999){
    console.log("Многозначное")
}