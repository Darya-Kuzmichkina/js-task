// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность,
// произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие
// функции. Добавить проверки на ввод
class Calculator{
    a = +prompt();
    b= +prompt();
    res1(){
        console.log(this.a+this.b);
        
    }
    res2(){
        console.log(this.a-this.b);
        
    }
    res3(){
        console.log(this.a*this.b);
        
    }
    res4(){
        console.log(this.a/this.b);
        
    }
}
const calculator=new Calculator();
calculator.res1();
calculator.res2();
calculator.res3();
calculator.res4();