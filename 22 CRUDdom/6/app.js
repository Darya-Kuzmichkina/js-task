// Создайте в HTML элемент <div class="card"> и добавьте внутрь него через JS:
// Заголовок (<h3>) с названием товара. Параграф (<p>) с описанием. Кнопку (<button>) с текстом
// «Купить»
const divCard = document.querySelector('.card');
const H3 = document.createElement('h3');
const pEl = document.createElement('p');
const buttonEl = document.createElement('button');
H3.textContent='Name';
pEl.textContent= 'description';
buttonEl.textContent='buy';
divCard.appendChild(H3);
divCard.appendChild(pEl);
divCard.appendChild(buttonEl);
document.body.appendChild(divCard);
