// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
  try{
   if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email.value)) throw new Error('не валидный email');
    else if(password.value.length<8) throw new Error('не валидный password');
    else if(password.value.length===0) throw new Error('не валидный name');
    const p = document.createElement('p');
    p.textContent='успешный вход';
    document.body.appendChild(p);
  }
  catch(error){
    alert(error.message);
  }
});

