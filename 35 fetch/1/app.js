// 1. Реализовать получение всех задач fetch('https://dummyjson.com/todos')
async  function test(){
    const p=await fetch('https://dummyjson.com/todos',{ method:'GET'});
    const info=await p.json();
    console.log(info);
    
}
test()