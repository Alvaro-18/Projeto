/*=====================Validação do form Login=====================*/
const login = document.querySelector('#login');
const matriculaLogin = document.querySelector('#loginMatriculaM');
const senhaLogin = document.querySelector('#loginPasswordM');
const erroLogin = document.querySelector('form p.erroPreenchimento');

login.addEventListener('submit', event =>{
  event.preventDefault()

  if(!matriculaValidation(matriculaLogin.value, 12)){
    erroLogin.style.display = 'block';
    return;
  }

  if(!passwordValidation(senhaLogin.value, 8)){
    erroLogin.style.display = 'block';
    return;
  }
})

//função de conferir matricula
function matriculaValidation(matricula, minMat){
  if(matricula.length === minMat){
    return true;
  }

  return false;
}

//função de conferir senha
function passwordValidation(password, minDigits){
  if(password.length >= minDigits){
    return true;
  }

  return false;
}
