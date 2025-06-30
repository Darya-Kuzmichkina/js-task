const obj = {
    name: "",
    age: " ",
birthday: "",

}
for( let key in obj){
    if(key === "name"){
        obj.name= prompt();
     
    }
    else if (key === "age"){
        obj.age= prompt();
     
    }
else if (key === "birthday"){
        obj.birthday= prompt();
     
    }
   
    
}
 console.log(obj);