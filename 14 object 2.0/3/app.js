let obj ={
    product1: 10,
     product2: 5, 
     product3: 8
};
const arr = Object.values(obj);

let num=0;

for (let i = 0; i < arr.length; i++) {
    num += arr[i];
    
}

console.log(num);
