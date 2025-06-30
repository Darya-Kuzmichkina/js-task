// На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и
// false в противном случае
const a= prompt();
const b= prompt();
const check=(first,second) => {
first.split("").sort().join("")===second.split("").sort().join("") ? console.log(true): console.log(false);


}
check(a,b)