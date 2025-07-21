// Создайте класс ShoppingCart с полем items (массив объектов { name, price }). Добавьте метод
// getTotalPrice(), который с помощью reduce() считает общую сумму товаров.
// Массив:
const items = [{ name: "Apple", price: 1.2 },
{ name: "Bread", price: 2.5 },
{ name: "Milk", price: 1.8 },
{ name: "Cheese", price: 3.0 },
{ name: "Butter", price: 2.3 },
{ name: "Eggs", price: 2.0 },
{ name: "Orange", price: 1.5 },
{ name: "Tomato", price: 1.7 },
{ name: "Chicken", price: 5.5 },
{ name: "Fish", price: 6.0 }];
class ShoppingCart{
    constructor(items){
        this.items=items;
    }
    getTotalPrice(){
        return this.items.reduce((sum, el)=> {
           return sum+el.price;
        },0);
    }
}
const shoppingCart= new ShoppingCart(items);
console.log(shoppingCart.getTotalPrice());
