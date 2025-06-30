// Через JS создайте элемент <ul> с тремя элементами списка <li> и добавьте его в документ
// HTML.
const ulEl = document.createElement('ul');
for(let i=0;i<3;i++){
   const liEl = document.createElement('li');
   liEl.textContent="hi";
   ulEl.appendChild(liEl);
};

document.body.appendChild(ulEl);