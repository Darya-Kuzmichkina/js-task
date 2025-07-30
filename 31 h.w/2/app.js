// Создай класс ProductManager, который в конструкторе принимает массив обычных объектов с товарами
//  (каждый объект содержит поля name, price, category) и сохраняет его в свойство products. 
// Добавь метод getByPriceRange(min, max), который возвращает массив всех товаров, у которых 
// цена находится в пределах от min до max включительно. Перебор можно сделать с помощью filter.
class ProductManager {
    constructor(products) {
        this.products = products;
    }

    getByPriceRange(min, max) {
        return this.products.filter(product => 
            product.price >= min && product.price <= max);
    }
}

const products = [
    { name: 'Шорты', price: 10, category: 'одежда' },
    { name: 'Телевизор', price: 2000, category: 'электроника' },
    { name: 'Книга', price: 20, category: 'книги' },
    { name: 'Джинсы', price: 150, category: 'одежда' },
];

const manager = new ProductManager(products);
console.log( manager.getByPriceRange(15, 2000));