// Удалите элемент с id="old-paragraph" из DOM, предварительно найдя его родительский
// элемент.
const oldP=document.querySelector('#old-paragraph');
oldP.parentNode.removeChild(oldP);