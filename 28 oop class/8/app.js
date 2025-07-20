// Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является -
// то false.
class Validator {
    isEmail() {
        const str = prompt();
        if (/^[A-Za-z0-9]+\@[a-z]+\.[a-z]+$/.test(str)) return true;
        else return false;

    }
}
const email= new Validator();
console.log(email.isEmail());
