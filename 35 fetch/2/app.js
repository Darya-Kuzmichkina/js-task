// 2. Реализовать получение всех задач fetch('https://dummyjson.com/todos'). Все элементы
// отобразить в html
async  function test(){
    const package=await fetch('https://dummyjson.com/todos',{ method:'GET'});
    const info=await package.json();
    info.todos.forEach(el=>{
        const p= document.createElement('p')
        p.textContent= el.todo;
        let div=document.querySelector('div');
        div.appendChild(p)
    })
    
}
test()