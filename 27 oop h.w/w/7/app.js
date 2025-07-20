// Класс EmailChecker, в котором:
// - isValid(email) — возвращает true, если email содержит символ @
// - main() — спрашивает email через prompt(), вызывает isValid() и пишет: "Email корректен" или "Некорректный email"
class EmailChecker{
    isValid(email){
        return email.includes("@");
    }
     main(email){

console.log(this.isValid(email) ? "Email корректен" : "Некорректный email");

     }
}
const emailChecker = new EmailChecker();
emailChecker.main(prompt());


