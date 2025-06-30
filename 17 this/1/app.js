// Создайте объект с полями name и функцией
// greet, которая выводит: "Привет, я <name>". 
const person = {
    name: "Anna",
    greet() {
        console.log(` привет, я ${this.name}`);
        
    }
};
person.greet();