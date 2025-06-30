let a = [];
for(let i=0;i< 5; i++){
    let b = prompt();
    if(b.length==3){
        a.push(b);
    }

}
console.log(a);

let a1 = [];

for(let i=0;i< a.length; i++){
if(a[i][0]===1||a[i][0]===2||a[i][0]===5){
 a1.push(a[i]);
    
}
}
console.log(a1);
