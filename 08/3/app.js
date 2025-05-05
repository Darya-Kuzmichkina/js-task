
let a = prompt("введите строку");
if (a.length== 0){
    console.log(" ввод не корректен");
    
}
else{
    console.log(a.replaceAll('@',''));
    
}