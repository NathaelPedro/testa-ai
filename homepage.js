const form = document.getElementsByClassName("faixa_login");
const input = document.getElementsByClassName("faça_login ");
const [nome,senha,button] = input;

function HandleSubmit (event) {
    event.preventDefault();
    window.location = "Page2.html"
}


form.addEventListener("submit",HandleSubmit)
