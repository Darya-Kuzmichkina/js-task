// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута
const lockedBtn= document.querySelector('.locked');
const unlockedBtn= document.querySelector('.unlocked');
const input= document.querySelector('input');
unlockedBtn.addEventListener('click', ()=>{
    input.disabled= true;
})
lockedBtn.addEventListener('click', ()=>{
    input.disabled= false;
})