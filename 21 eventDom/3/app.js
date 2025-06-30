// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута
const click = document.querySelector("button");
click.addEventListener("click", () => {
  const inp = document.querySelector("input");

  alert(inp.value);
});