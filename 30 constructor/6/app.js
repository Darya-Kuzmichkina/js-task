// Создайте класс Movie с полями title, year и rating. Добавьте метод isPopular(), возвращающий true,
// если рейтинг выше 8. Вызовите метод из нескольких экземпляров классов с разными значениями
// rating. 
class Movie{
    title;
    reting;
    constructor(title,reting){
        this.title= title;
        this.reting=reting;
        console.log(this.isPopular(this.title,this.reting));
        
    }
isPopular(title,reting){
return reting>8 ? `${title}: ${true}` :  `${title}: ${false}`;
}
}
const movie= new Movie('Wold',9);