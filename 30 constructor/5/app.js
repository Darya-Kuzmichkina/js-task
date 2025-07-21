// Создайте класс Product. Добавьте проверку в классе Product, чтобы цена не могла быть меньше
// нуля. Если значение некорректное — выбрасывайте ошибку throw new Error. Ошибку обработать
// через try catch.
class Product{
    sum;
    constructor(a){
        this.sum=a;
    }
checkSum(){
    try{
        if( this.sum<0) throw new Error('error');
        return this.sum;
    }
catch(error){
   return error;
    
}

}
}
const product= new Product(10);
console.log(product.checkSum());
