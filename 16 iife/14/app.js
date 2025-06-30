// Функция принимает строку и выводит все символы, которые встречаются в ней
// только один раз.
// "programming" // Вывод: p, o, a, i, n
 const one = ()=>{
    const str = prompt();
    const newArr=[];
    for( let i =0;i<str.length;i++){
        if(!newArr.includes(str[i])){
            newArr.push(str[i]);
        }
    }
    console.log(newArr);
    
 }
 one();