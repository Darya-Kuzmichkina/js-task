const obj1={
        id:1,
name1: "Dasha"
}
const obj2= {
        age: 19,
        name1:" Dasha"
}
const obj3={}
for ( let key in obj1){
        if( obj2.hasOwnProperty(key)){
                obj3[key]=obj1[key];
        }
}
console.log(obj3);
