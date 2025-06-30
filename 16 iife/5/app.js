// Напишите IIFE-функцию, принимающую массив строк и число. Внутри выведите
// строки длиной больше указанного числа.
// ["cat", "dinosaur", "elephant", "dog"], 3 // Ожидаемый вывод: [dinosaur, elephant]

//1
// const arr= ["cat", "dinosaur", "elephant", "dog"];
// const n = 3;
// (() =>{
//   let newArr=[];
// for(i=0;i<arr.length;i++){
//   if(arr[i].length>n){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// })();

//2
// const arr= ["cat", "dinosaur", "elephant", "dog"];
// const n = 3;
// (() =>{
//   let newArr=[];
//   let i=0;
// while(i<arr.length){
//   if(arr[i].length>n){
//     newArr.push(arr[i]);
//   }
//   i++;
// }
// console.log(newArr);

// })();


//3
// const arr= ["cat", "dinosaur", "elephant", "dog"];
// const n = 3;
// (() =>{
//   let newArr=[];
//   let i=0;
//   do{
//     if(arr[i].length>n){
//     newArr.push(arr[i]);
//   }
//   i++;
//   }
// while(i<arr.length)
// console.log(newArr);

// })();

//4
const arr= ["cat", "dinosaur", "elephant", "dog"];
 const n = 3;

(()=>{
   let newArr=[];
   for(let el of arr){
    el.length>n? newArr.push(el) : null;
   } 
   console.log(newArr);
})()

