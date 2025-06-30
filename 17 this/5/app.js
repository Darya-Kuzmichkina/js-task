// Объект user с role (admin / user) и методом checkAccess, который выводит разный
// текст в зависимости от роли.
// Сообщение для admin -> <name>: полный доступ
// Сообщение для user -> <name>: ограниченный доступ
const user={
   role:"admin",
   name: "Dasha",
   checkAccess(){
      if(user.role==="admin") console.log( `${this.name}: полный доступ`);
      
      else console.log( `${this.name}: ограниченный доступ`);
   }
}
user.checkAccess();
user.role = "user"
user.checkAccess();