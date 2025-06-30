// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута
const click = document.querySelector("button");
const inp = document.querySelector("input");
    let flag=false;
click.addEventListener("click", () => {

    if(flag==false){
      inp.value="???";
      flag=true;
    }
    else{
         inp.value="!!!";
      flag=false;
    }
});

