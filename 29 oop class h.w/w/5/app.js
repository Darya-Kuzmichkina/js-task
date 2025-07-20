// Создайте класс DigitSummer с методом sumDigits(num), который возвращает сумму цифр числа.
// 123 -> 6
// 241 -> 7
class DigitSummer{
   sumDigits(num){
      const str = num.toString().split("").map(Number);
      console.log(str.reduce((el,sum)=> sum+el,0));
      
   }
}
const sum = new DigitSummer();
sum.sumDigits(prompt());