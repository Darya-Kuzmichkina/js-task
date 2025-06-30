// Вывести для каждого объекта в массиве разницу между max и min в массиве
// чисел
// [10, 2, 5, 3, 7] // 8
const arr = [10, 2, 5, 3, 7];
let max=arr[0], min=arr[0];
for (let i = 0; i < arr.length; i++) {
   
    if(min>arr[i]){
        min= arr[i];
    }
     if(max<arr[i]){
        max= arr[i];
    }

}
console.log(max-min);
