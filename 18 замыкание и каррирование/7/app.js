// Функция greetUser(name) должна возвращать функцию, которая приветствует
// пользователя по имени. 
function greaterThan(name){
    return function(){
        console.log(`привет, ${name}`);
        
    }
}
 const userName=greaterThan("Dasha");
 userName();