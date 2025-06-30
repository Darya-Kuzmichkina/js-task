const arr = [1, 2, 3, 4, 5];
const obj={};
for( let i=0; i< arr.length;i++){
if( arr[i] % 2 ===0)
{
obj[arr[i]]= true;

}
else{
    obj[arr[i]]= false;
}
}
console.log(obj);
