// У вас есть лента из 2 карточек товара и кнопка "Показать ещё", которая добавляет 3 новых



// поста в ленту.
const button = document.querySelector('button');
const content = document.querySelector('.content');
button.addEventListener('click',()=>{
    for(let i=0;i<3;i++){
        const addDiv=document.createElement('div');
        const  rectDiv= document.createElement('div');
        rectDiv.style="width: 200px; height: 300px; background-color: #000;";
        const p= document.createElement('p');
    p.textContent= 'описание';
    addDiv.appendChild(rectDiv);
    addDiv.appendChild(p);
    content.appendChild(addDiv);
    }
})