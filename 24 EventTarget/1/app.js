// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const ul = document.querySelector('ul');
const h2 = document.querySelector('h2');
ul.addEventListener('click',(event)=>{
   
    h2.textContent= event.target.textContent;
})