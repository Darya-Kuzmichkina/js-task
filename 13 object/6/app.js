const obj =  {"x": 5, "y": 10, "z": "abc"};
const arr = [];
for( let key in obj){
    
        arr.push(key);
    
}
console.log(arr);
