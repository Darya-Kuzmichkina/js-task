// Объект с orderId и status, метод printStatus, выводит: "Заказ <orderId>: <status>".
const obj ={
 orderId:1,
 status: "готов",
  printStatus(){
    console.log(this.status);
    
  }
}
obj.printStatus();