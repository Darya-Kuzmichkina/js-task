// Вывести чётные числа из массива
const pushArr = (arr)=>{
for (let i = 0; i < 5; i++) {
   arr.push(prompt());}
   const res= arr.filter((num)=>{
        return num %2===0;
    });
    console.log(res);
    
}


const array = []; 
pushArr(array);