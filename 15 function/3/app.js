// Напишите функцию, которая принимает строку в маленьком регистре и возаращает строку, где
// каждое слово начинается с большого регистра
// hschool company -> Hschool Company 
function doRes(string) {
    const arr= string.toLowerCase().split(" ");
    const res1= arr.map(function (el,i) {
      return arr[i][1].toUpperCase() + el.slice(1);
    },0);
    console.log(res1);
    
    
}
doRes(prompt());