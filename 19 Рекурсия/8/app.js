// Реализуйте поиск максимального числа статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 4
// Входные: [10, 5, 8] → Результат: 10
const array = [1, 2, 3, 4];
findMax =(arr,i=0,max=arr[0]) =>{
    if(i===arr.length){
        return max;
    }
    if(arr[i]>max){
        max=arr[i];
    }
    return findMax(arr,i+1,max);
}
console.log(findMax(array));
