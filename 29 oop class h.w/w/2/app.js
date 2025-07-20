// Создайте класс FactorialCalculator с методом factorial(n), который возвращает факториал числа.
class FactorialCalculator{
    factorial(n){
        if(n===0) return 1;

        return (n* this.factorial(n-1));
    }
}
const factorialCalculator = new FactorialCalculator();
console.log(factorialCalculator.factorial(5));
