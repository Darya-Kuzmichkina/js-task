let a = [1, 3, 6, 8, 9, 12];
let b = 0;
for(let i=0;i< a.length; i++){
if(!isNaN(a[i])&& a[i]%3===0){
    b+=a[i];
} 
}
console.log(b);
