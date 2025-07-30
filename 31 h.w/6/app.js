// Создай метод getCategoryCounts() в классе ProductManager, который возвращает объект, 
// где ключи — названия категорий, а значения — количество товаров в каждой категории.
//  Для подсчёта количества используй цикл while. 
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

    getCategoryCounts(){
        const categoryCounts = {};
        let index = 0;

        while (index < this.products.length) {
            const category = this.products[index].category;
           
            if (!categoryCounts[category]) {
                categoryCounts[category] = 0;
            }
          
            categoryCounts[category]++;
            index++;
        }

        return categoryCounts;

    }
}
const productManager = new ProductManager(products);
console.log(productManager. getCategoryCounts());