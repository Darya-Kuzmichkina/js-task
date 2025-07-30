// Реализуй метод getAveragePrice() в классе ProductManager, который возвращает 
// среднее арифметическое цены всех товаров из массива products. Если товаров нет, 
// метод должен вернуть 0. Для подсчёта суммы используй метод reduce().
const products = [
    { name: 'Шорты', price: 10, category: 'одежда' },
    { name: 'Телевизор', price: 2000, category: 'электроника' },
    { name: 'Книга', price: 20, category: 'книги' },
    { name: 'Джинсы', price: 150, category: 'одежда' },
];

class ProductManager{
    constructor(products){
        this.products=products;
    }
    getAveragePrice(){
        if (this.products.length === 0) return 0;
        const totalSum = this.products.reduce((sum, el) => {
            return sum + Number(el.price); 
        }, 0);

        return totalSum / this.products.length;
    }
}
const productManager = new ProductManager(products);
console.log(productManager.getAveragePrice());