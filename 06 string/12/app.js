let a = +prompt("введите число");
if (!Number.isNaN(a)) {
   switch (a) {
      case 1:
         console.log("утро");
         break;
      case 2:
         console.log("день");
         break;
      case 3:
         console.log("вечер");
         break;
      case 4:
         console.log("ночь");
         break;
      default: console.log("false");
   }
}
else {
   console.log("не число");
}