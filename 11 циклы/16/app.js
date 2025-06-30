let a = "55639217";
let rez=a[0];
for (let i=1; i<a.length;i++){
   if ( +a[i-1]%2 !==0 && a[i]%2 !==0){
      rez+=":"
   }
   rez+=a[i];
}
console.log(rez);
