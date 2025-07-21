// Добавьте в класс Car поле speed = 0, метод drive(speed) для перезаписи скорости и stop() для
// остановки (скорость = 0).
class Car{
    speed;
    constructor(speed){
        this.speed=0
    }
    drive(speed){
        this.speed=speed;
    }
    stop(speed){
        this.speed=0;
    }
}
const car= new Car();
car.drive(80);
console.log(car.speed);
car.stop();
console.log(car.speed);

