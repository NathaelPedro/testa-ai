const form = document.getElementsByClassName("faixa_login");
const input = document.getElementsByClassName("faça_login ");
const [nome,senha,button] = input;
console.log(window.location.href) 

function HandleSubmit (event) {
    event.preventDefault();
    window.location.href = "Page2.html"
}


form.addEventListener("submit",HandleSubmit)
