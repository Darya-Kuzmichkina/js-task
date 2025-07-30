// Создай конструктор Product, который принимает три значения: name (название товара), 
// price (число) и category (строка). Внутри конструктора реализуй метод isValid(),
//  который проверяет: название не должно быть пустым, цена должна быть положительным числом, 
// а категория — одной из следующих: "одежда", "электроника", "книги". Если хотя бы одно из 
// условий не выполняется, выброси ошибку через throw new Error(...).

class Product{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.category=category;
        this.price=price;
       
    }
        isValid(){
            if(this.name.length===0) throw new Error('name is not valid');
            if(this.price<0) throw new Error('price is not valid');
            if(this.category !== "одежда" && this.category !== "электроника" && this.category !== "книги") {throw new Error('category is not valid')};
console.log(`${this.category}: ${this.name}, ${this.price}`)
        
    }
}
const product = new Product(prompt('name'),prompt('price'),prompt('category'));
try {
    product.isValid();
} catch (e) {
    console.error(e.message);
}

