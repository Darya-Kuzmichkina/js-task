// Создайте класс MaxFinder с методом findMax(arr), который возвращает наибольшее число в массиве.
class MaxFinder{
  findMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
      if(max< arr[i])  max=arr[i];
    }
    return max;
  }
}
const maxfinder= new MaxFinder();
console.log(maxfinder.findMax([1,6,7,4,9,11,4,3,2]));
