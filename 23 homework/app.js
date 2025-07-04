// Создайте веб-страницу, на которой будет слайдер из трёх изображений. 
// Пользователь должен иметь возможность переключать картинки с помощью стрелок “влево” и “вправо”.

const buttonPrev = document.querySelector('#prev');
const buttonNext = document.querySelector('#next');
const slideImage = document.querySelector('#slide-image');
const slideTitle = document.querySelector('#slide-title');
const slideDescription = document.querySelector('#slide-description');
let imgId =0;
const slides = [
    {
        img: "img1.webp",
        title: "букет 'Нежный'",
        description: "Каждый букет — это история любви"
    },
    {
        img: "img2.jpeg",
        title: "букет 'Розы пестрые'",
        description: "Подарите радость с каждым лепестком!"
    },
    {
        img: "img3.jpg",
        title: "букет 'Голубая гортензия'",
        description: "Цветы для каждого мгновения"
    }
];

function scroll() {
    const currentSlide = slides[imgId];
    slideImage.src = currentSlide.img;
    slideTitle.textContent = currentSlide.title;
    slideDescription.textContent = currentSlide.description;
}
buttonNext.addEventListener('click', next=()=>{
   imgId=(imgId === slides.length - 1) ? 0 : imgId + 1;
      scroll();

});
  buttonPrev.addEventListener('click', () => {
        imgId = (imgId === 0) ? (slides.length - 1) : (imgId - 1); 
        scroll();
    });
   scroll();

setInterval(() => {
    imgId = (imgId === slides.length - 1) ? 0 : imgId + 1;
    scroll();
}, 3000);