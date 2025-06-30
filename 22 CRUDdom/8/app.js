// На странице есть список <ul>, поле ввода и кнопка. Добавляйте в список только те значения,
// которые являются корректными email-адресами (с помощью регулярного выражения). Если
// email невалиден — бросьте исключение с соответствующим сообщением.
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
   try{
   const li = document.createElement('li');
li.textContent=input.value;
if(!/^[A-Za-z0-9\.\_]+@[a-z]+\.[a-z]{2,5}/.test(input.value)) throw new Error('error');
ul.appendChild(li);
} catch{
   alert('error')
}
});
