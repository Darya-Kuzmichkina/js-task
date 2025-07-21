// Добавьте метод greet() в класс User первого задания, который выводит строку: "Привет, меня зовут
// {name}".

class User{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    greet(){
        console.log(`Привет, меня зовут ${this.name}"`);
        
    }
}
const user= new User('Dasha',20);
user.greet();