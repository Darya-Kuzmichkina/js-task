const obj={};
const n= +prompt();
const arr=[];

for( let i =0; i<n; i++){
    const value = +prompt();
arr.push(value);
}
const sum = arr.reduce(function (res,value) {
    return res + value;} , 0);
obj.sum = sum;
console.log(obj);
