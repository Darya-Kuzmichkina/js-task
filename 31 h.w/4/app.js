//  Добавь в класс ProductManager метод hasCheaperThan(limit), который возвращает
//  true, если в списке товаров есть хотя бы один товар с ценой ниже значения limit,
//  и false — если таких товаров нет. Используй метод some.
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
    hasCheaperThan(limit){
      return  this.products.some(el=> el.price < limit);
    }
}
const productManager = new ProductManager(products);
console.log(productManager.hasCheaperThan(15));
