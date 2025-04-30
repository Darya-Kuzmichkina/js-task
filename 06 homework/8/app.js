
let a = +prompt("введите a");
let znak = prompt("введите знак");
let b = +prompt("введите b");
switch (znak) {
   case "+":
      console.log(a + b);
      break;
   case "-":
      console.log(a - b);
      break;
   case "*":
      console.log(a * b);
      break;
   case "/":
      console.log(a / b);
      break;
      default:
         console.log( false);
         
      
}


