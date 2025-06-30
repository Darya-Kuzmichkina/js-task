// Скачать 2 любые картинки из интернета. На странице отображается одна картинка. 
// При нажатии на кнопку стоящую рядом она заменяется на другую. Подсказка: узел.src = './../../../...'
 const button = document.querySelector('button');
        const img = document.querySelector('img');

        button.addEventListener('click', () => {

            if (img.src.includes('1.jfif')) {
                img.src = '2.jfif'; 
            } else {
                img.src = '1.jfif'; 
            }
        });