// . Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки
const click = document.querySelector("button");
click.addEventListener("click", () => {
  try {
    const inp = document.querySelector("input");
    if (!inp.value) throw new Error("error");
    if (!isNaN(inp.value)) throw new Error("error");
    alert(inp.value);
  }
  catch (Error){
    alert(Error.message);
  }
});