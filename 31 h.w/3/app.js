// В классе ProductManager реализуй метод getByCategory(category), который возвращает массив 
// всех товаров из products, у которых поле category совпадает с переданным значением. Для перебора используй метод filter.
class ProductManager{
    constructor(products) {
        this.products=products;

    }
    getByCategory(category){
 return this.products.filter(el=> el.category===category)
    }
}

const products = [
    { name: 'Шорты', price: 10, category: 'одежда' },
    { name: 'Телевизор', price: 2000, category: 'электроника' },
    { name: 'Книга', price: 20, category: 'книги' },
    { name: 'Джинсы', price: 150, category: 'одежда' },
];

const manager = new ProductManager(products);
res= manager.getByCategory('одежда')
console.log(res);