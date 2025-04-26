let a = +prompt("Введите 1 число");
let b = +prompt("Введите 2 число");

 if( a % b === 0){
    console.log("Делится");
    console.log(a/b);
 }
 else{
    console.log("делится с остатком");
    console.log(a%b);
 }