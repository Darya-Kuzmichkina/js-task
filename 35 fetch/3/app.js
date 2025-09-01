// Реализовать получение фактов про котов fetch('https://catfact.ninja/fact) и результат отобразить
// в <p>
async  function test(){
    const package=await fetch('https://catfact.ninja/fact',{ method:'GET'});
    const info=await package.json();
     const p= document.createElement('p')
      p.textContent=info.fact
       
        document.querySelector('body').appendChild(p)

    
}
test()