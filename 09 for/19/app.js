
for( let i=1; i<=100;i++){
    if(i%5===0 && i%10===0){
        break;
    }
    if(i%4===0 && i%8!==0){
        continue
    }
    console.log(i);
    
}