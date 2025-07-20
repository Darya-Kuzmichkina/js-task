//Класс SpaceRemover содержит функцию, которая убирает все лишние пробелы и выводит результат.
class SpaceRemover{
  removeExtraSpaces(str) {
        const words = str.trim().split(' ').filter(word => word !== '');
        const result = words.join(' ');
        console.log(result);
    }

}
const spaceRemover = new SpaceRemover();
spaceRemover.removeExtraSpaces('  Привет    мир!   Как    дела?        ')