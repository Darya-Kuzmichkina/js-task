// Создай класс AgeChecker, в котором:
// - метод isValid(age) возвращает true, если возраст больше или равен 18.
// - метод main() спрашивает возраст через prompt(), вызывает isValid(), и выводит в консоль: "Доступ разрешен" — если возраст валидный
class AgeChecker {
   isValid(age) {
  return age>=18;
   }
main(age){
   if(this.isValid(age)) console.log("Доступ разрешен");
   else console.log('Доступ запрещен');
   
}
}
 const ageChecker = new AgeChecker();
 ageChecker.main(prompt());
