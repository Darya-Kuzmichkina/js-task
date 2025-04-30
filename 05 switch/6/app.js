let v1 = +prompt("Введите v1");
let v2 = +prompt("Введите v2");
let s = +prompt("Введите s");
// if (!isNaN(v1) && !isNaN(v2) && !isNaN(s)){
//     console.log(s / (v1 + v2));
// }
// else{
//     console.log("не число");
// }
console.log(!isNaN(v1) && !isNaN(v2) && !isNaN(s) ? s / (v1 + v2) : "не число");
