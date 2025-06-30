const obj = {"1": "a", "2": "b", "name": "c"};
for (let key in obj){
    if(isNaN(key)){
        delete obj[key];
    }
}
console.log(obj);
