let a = +prompt("введите число");
if (!Number.isNaN(a)) {
   switch (a) {
      case 1:
         console.log("очень плохо");
         break;
      case 2:
         console.log("плохо");
         break;
      case 3:
         console.log("удовл");
         break;
      case 4:
         console.log("хорошо");
         break;
         case 5:
         console.log("отлично");
         break;
      default: console.log("false");
   }
}
else {
   console.log("не число");
}