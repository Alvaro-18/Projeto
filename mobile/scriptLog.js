/*=====================Validação do form Login=====================*/
const login = document.querySelector('#login');
const matriculaLogin = document.querySelector('#loginMatriculaM');
const senhaLogin = document.querySelector('#loginPasswordM');
const erroLogin = document.querySelector('form p.erroPreenchimento');
const loginBtn = document.querySelector('#loginBtn');
let redirecionarControler = true;

login.addEventListener('submit', event =>{
  event.preventDefault()

  if(!matriculaValidation(matriculaLogin.value, 12)){
    erroLogin.style.display = 'block';
    redirecionarControler = false;
    return;
  }
  else{
    redirecionarControler = true;
  }

  if(!passwordValidation(senhaLogin.value, 8)){
    erroLogin.style.display = 'block';
    redirecionarControler = false;
    return;
  }
  else{
    redirecionarControler = true;
  }

  if(matricula.value === '202211190010'){
    loginBtn.addEventListener('click', redirecionarAdm());
    redirecionarControler = false;
    return;
  }
  else{
    redirecionarControler = true;
  }

  if(redirecionarControler === true){
    loginBtn.addEventListener('click', redirecionar())
    return;
  }
})

//função de redirecionamento
function redirecionar(){
  window.location.href = 'form.html';
}

function redirecionarAdm(){
  window.location.href = 'admPag.html'
}

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
