const obj =  {"1": "a", "3": "b", "4": "c"};
const arr = [];
for( let key in obj){
    if( key % 2 !== 0){
        arr.push(key);
    }
}
console.log(arr);
