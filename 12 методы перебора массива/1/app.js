let arr = [];
for (let i = 0; i <5; i++) {
    arr.push(prompt());
    
}
console.log(arr);

let arr2=[];

for (let i = 0; i < arr.length; i++) {
    if(!isNaN(arr[i])){
        arr2.push(arr[i]);

    }
    
}

if (arr2.length==0) {
    console.log('массив пуст');
    
}
else{
    console.log(arr2);
    
}