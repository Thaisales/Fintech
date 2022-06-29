let btnVoltar = document.querySelector("#btn-voltar");
btnVoltar.addEventListener("click", voltarInicio)

function voltarInicio(){
    window.event.preventDefault();
    window.location.href = "login.html";
}