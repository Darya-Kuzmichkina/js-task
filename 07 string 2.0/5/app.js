let a = prompt("введите строку").trim();
if (!isNaN(a)){
    console.log(false);
    
}
else{

    console.log( a[0].toLocaleUpperCase()+a.slice(1).toLowerCase);

    
    
}