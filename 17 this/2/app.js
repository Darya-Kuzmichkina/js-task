// Создайте объект с firstName, lastName и методом
// fullName, который выводит полное имя.
const persone ={
    firstName: "иван",
    lastName: "сидоров",
    fullName(){
        console.log(`${this.firstName} ${this.lastName}`);
        
    }
}
persone.fullName();