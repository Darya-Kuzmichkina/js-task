// Функция принимает массив чисел и порог. Выводит только те числа, у которых
// сумма цифр больше порога.
// [12, 49, 123, 88, 305], 10); // Ожидаемый вывод: 49, 123, 88
const print= ()=>{
    const arr= [12, 49, 123, 88, 305];
    const n = 10;
    const arrWithStr = arr.map((el)=>String(el));
    const arrayOfSumOfEL=[];
    for (let i = 0; i < arrWithStr.length; i++) {
        let sum=0;
        for (let j = 0; j < arrWithStr[i].length; j++) {
         sum+= +arrWithStr[i][j];
            
        }
       arrayOfSumOfEL.push(sum);
        
    }
   const res= arrayOfSumOfEL.filter((el)=>
   {
return el> n;
   })
    console.log(res);
    
}
print();