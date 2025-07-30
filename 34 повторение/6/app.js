// Создай класс Sequence, метод get() → возвращает массив чисел сгенерированных prompt.
// Создай наследника OddIndexSum , метод sum(), который суммирует элементы на нечетных индексах.
// Ожидаемый результат: 7 + 5 = 12.
class Sequence{
    get(){
        const arr=[];
        for(let i=0;i<=5;i++){
            arr.push(prompt());
        }
        return arr;
    }
}
class OddIndexSum extends Sequence{
    sum(){
        const res=this.get();
        let sum=0;
        for(let i=0;i<res.length;i++){
             if(i%2!==0) sum+= res[i]
        }
        
        return sum;
    }
}
const odd= new OddIndexSum();

console.log(odd.sum());
