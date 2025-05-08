let a = [1, 2, 3, 4, 5];
let even =0;
let odd =0;
for(let i=0;i< a.length; i++){
   if(!isNaN(a[i]) && a[i]%2===0){
      even++
   }
   else if(!isNaN(a[i]) && a[i]%2!==0){
      odd++
   }
}

console.log('четные '+ even);
console.log('нечетные '+ odd);