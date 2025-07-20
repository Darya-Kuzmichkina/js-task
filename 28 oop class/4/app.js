// Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На
// основании числа формируется динамический массив из n элементов внутри класса. Создать
// функцию для подсчета всех четных чисел массива. Добавить проверки на ввод
class MathСalculation{
     n = prompt();
arr=[];
array(){
    for (let i = 0; i < this.n; i++) {
        this.arr.push(prompt());
        
    };
    return this.arr;
};
checkArr(){
    
    const res = this.arr.filter(el=>{
        if(!isNaN(el)){

            return  el%2===0;
        }

        
    });
    return res.length;
};
};
const math = new MathСalculation();

console.log(math.array());
console.log(math.checkArr());
