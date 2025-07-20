// Создай класс NumberChecker с методом is_even, который принимает число и возвращает True, если оно чётное. Вызови через объект.
 class NumberChecker{
  is_even(num){
console.log(num%2===0 ? true : false);

  }
 }
  const numberChecker = new NumberChecker();
  numberChecker.is_even(12);