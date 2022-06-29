let inputEmail = document.querySelector("#input-email");
inputEmail.addEventListener("change", validarEmail);

function validarEmail() {
  let email = inputEmail.value;
  console.log(email);
  let emailValido = ValidateEmail(email);
  console.log(emailValido);
}
function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("E-mail inválido");
  return false;
}
