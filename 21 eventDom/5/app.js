// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. 
const click = document.querySelector("button");
click.addEventListener("click", () => {
  const inp = document.querySelector("input");
if(inp.value >0){
   let fib= [0,1];
   for (let i = 2; i < inp.value; i++) {
      fib[i]=fib[i-1]+fib[i-2];
      
   }
   console.log(fib);
   
}
});
