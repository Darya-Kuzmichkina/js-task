// Создай класс NumberGen, метод get(n) → возвращает массив [1, 2, 3, 4, 5].
// Создай наследника SplitEvenOdd, метод getData(n) возвращает массив из двух списков: четные и нечетные.
// Пример: '[2, 4] [1, 3, 5]'
class NumberGen {
    get(n) {
        let arr = []
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    }
}
class SplitEvenOdd extends NumberGen {
    getData(n) {
        const num = this.get(n);
        // let evens = [];
        // let odds = [];
        // for (let i = 0; i < num.length; i++) {
            // if (num[i] % 2 === 0) {
            //     evens.push(num[i]);
            // }
            // else{
            //     odds.push(num[i]);
            // }
            
         const {evens,odds}=   num.reduce((el,numbers)=>{
                if (numbers % 2 === 0) {
                    el.evens.push(numbers)
                }
                else{
                     el.odds.push(numbers)
                }
                 return el
            },{ evens:[],odds:[]})
           return [evens,odds];
        // }
      

    }
}
const splitEvenOdd= new SplitEvenOdd();
console.log(splitEvenOdd.getData(5));
