//Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное
// слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно,
// в верхний
// happy new year -> happy NEW year
function doRes(string) {
    const arr= string.split(" ");
    const res1= arr.map(function (el,i) {
        if((i+1)%2===0){
            return el.toUpperCase();
        }
        else{
            return el.toLowerCase();
        }
    },0);
    console.log(res1);
    
    
}
doRes(prompt());