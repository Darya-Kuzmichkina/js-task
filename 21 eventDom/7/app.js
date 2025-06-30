// . Записать в результат удвоенное значение инпута. Добавить проверки
const click = document.querySelector("button");
click.addEventListener("click", () => {
    try {
        const inp = document.querySelector("input");
        if (isNaN(inp.value)) throw new Error("error");
        const res = document.querySelector("p");
        res.textContent = "result " + inp.value * 2;
    }
    catch (Error) {
        console.log(Error.message);
    }
});