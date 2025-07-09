const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];
const container = document.querySelector('.container');
const fr = document.querySelector('.fr');
const ov = document.querySelector('.ov');
const yag = document.querySelector('.yag');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal .close');

 window.addEventListener('click', (event) => {
    
    if(!event.target.closest('.item')){
  modal.style.display = 'none';
    }
   });
btnClose.addEventListener('click', () => modal.style.display = 'none');
const allArr= ['Фрукты','Овощи','Ягоды'];

const showRes = (params) => {
    container.innerHTML = ``;
    modal.style.display = 'none'
    const frRes = items.filter((el) => (params.includes(el.category) ? true : false));
    frRes.forEach((el) => {
     
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `<h2> ${el.category} </h2> <p> ${el.name} </p>`;
        container.appendChild(item);
        item.addEventListener('click', () => {

            modal.style.display = 'block';
            const modalName = document.querySelector('.modal .name');
            modalName.textContent = el.name;
            const modalCategory = document.querySelector('.modal .category');
            modalCategory.textContent = el.category;
            const modalDescription = document.querySelector('.modal .description');
            modalDescription.textContent = el.description;

           
        });

    });
}

fr.addEventListener('click', () => showRes(['Фрукты']));
ov.addEventListener('click', () => showRes(['Овощи']));
yag.addEventListener('click', () => showRes(['Ягоды']));

showRes(allArr);


