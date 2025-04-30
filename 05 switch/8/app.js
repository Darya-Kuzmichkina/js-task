let a = +prompt("введите число");
if (!Number.isNaN(a)) {
   switch (a) {
      case 1:
         console.log("зима");
         break;
      case 2:
         console.log("весна");
         break;
      case 3:
         console.log("лето");
         break;
      case 4:
         console.log("осень");
         break;
      default: console.log("false");
   }
}
else {
   console.log("не число");
}