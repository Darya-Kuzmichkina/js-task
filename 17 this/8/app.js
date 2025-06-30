// Объект с полем M и методом countEvens, который считает и выводит количество
// чётных чисел от 1 до M.
const obj={
    m:5,
countEvens(){
    
    for (let i =1; i <= this.m; i++) {
           arr.push(i);
        
    }
    const res= arr.filter((el)=> (el%2==0 ? true : false));
    console.log(res.length);
    
}

};
const arr=[];
obj.countEvens(arr);