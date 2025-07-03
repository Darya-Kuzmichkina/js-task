// На странице есть форма с двумя полями ввода:
// • первое поле — email
// • второе поле — пароль
// • и кнопка "Войти".
// По клику на кнопку нужно:
// • проверить, что email написан правильно (с помощью регулярного выражения),
// • убедиться, что пароль не пустой и содержит не менее 8 символов.
// Если всё введено верно — выводите сообщение Успешный вход!
// Если есть ошибка — показывайте соответствующее сообщение об ошибке под формой.
const button= document.querySelector('button');
const inputEmail= document.querySelector('.email');
const inputPass= document.querySelector('.password');
button.addEventListener('click',()=>{
    try{
        if(!/^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/i.test(inputEmail.value)) throw new Error('errorEmail');
        else if (inputPass.value.trim().length<8)  throw new Error('errorPassLength');
 alert('успешный вход');
    }
    catch(error){
        console.log(error);
        
        alert(error.message);
    }
})
