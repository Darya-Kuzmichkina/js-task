// Создайте веб-страницу, на которой будет слайдер из трёх изображений. 
// Пользователь должен иметь возможность переключать картинки с помощью стрелок “влево” и “вправо”.

// Button left
// Image 
// Button right

//  1. Отобразить 3 разные картинки, но одновременно показывать только одну.
//  2. Добавить 2 кнопки: “Назад” и “Вперёд”.
//  3. При нажатии на кнопки — менять изображение.
//  4. Когда слайдер доходит до последней картинки и нажимается “Вперёд” — он возвращается к первой.
//  5. Когда нажимается “Назад” на первой — показывается последняя.

const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
const img = document.querySelectorAll('img');
const div = document.querySelectorAll('.slider');
let imgId =0;
function scroll() {
    img.forEach((imgs, i) => {
        imgs.style.display = i === imgId ? 'block' : 'none';
    });
}
buttonNext.addEventListener('click',()=>{
   imgId=(imgId === img.length - 1) ? 0 : imgId + 1;
      scroll();

});
  buttonPrev.addEventListener('click', () => {
        imgId = (imgId === 0) ? (img.length - 1) : (imgId - 1); 
        scroll();
    });
   scroll();


