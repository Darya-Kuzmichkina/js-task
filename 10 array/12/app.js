const arr1= [1, 2, 2, 3, 4, 4, 3, 4, 5];
const arr2=[];
for(let i=0;i< arr1.length; i++){
   
if(!arr2.includes(arr1[i]))
{
arr2.push(arr1[i]);
}
}
console.log(arr2);
