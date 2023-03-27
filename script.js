/*==================Funções de abrir o popUp======================*/
//botão de requerimento
const requerimento = document.getElementById('btnRequerimento')
requerimento.addEventListener('click', popUp)

//função de abrir o popUp de login
function popUp() {
  let SingIn = document.querySelector('.popUpLogin')
  SingIn.style.display = 'flex'
}

//botão de cadastrar-se
const cad = document.getElementById('cadastro')
cad.addEventListener('click', popUp2)

//função de abrir o popUp de cadastro
function popUp2() {
  let SingUp = document.querySelector('.popUpSingUp')
  SingUp.style.display = 'flex'
}

//botão de cadastro
const complete = document.getElementById('sendCadastro')


/*==================Funções de fechar o popUp======================*/

//Botão de fechar login
const fecharLog = document.querySelector('.fecharLog')
fecharLog.addEventListener('click', fecharPop)
//Botão de fechar cadastro
const fecharSing = document.querySelector('.fecharSing')
fecharSing.addEventListener('click', fecharPop)
fecharSing.addEventListener('click', fecharPop2)
fecharSing.addEventListener('click', fecharComplete)

//Botão de fechar login
function fecharPop() {
  let pop = document.querySelector('.popUpLogin')
  pop.style.display = 'none'
  loginErro.style.display = "none";
}
//função de fechar cadastro
function fecharPop2() {
  let pop = document.querySelector('.popUpSingUp')
  pop.style.display = 'none'
  cadastroErro.style.display = 'none';
}

//função de fechar o popUpConcluido
function fecharComplete() {
  let finish = document.querySelector('.popUpSingUp .concluido')
  finish.style.display = 'none'
}

/*===============Validação do form Login================================*/
const form = document.querySelector('#loginForm');
const matricula = document.querySelector('#loginMatricula');
const password = document.querySelector('#loginPassword');
const loginErro = document.querySelector('.popUpLogin form p.erroPreenchimento');

form.addEventListener('submit', event => {
  event.preventDefault()

  if(!matriculaValidation(matricula.value, 12)) {
    loginErro.style.display = 'block';
    return;
  }

  if(!passwordValidation(password.value, 8)){
    loginErro.style.display = 'block';
    return;
  }

})






/*===============Validação do form Cadastro================================*/

const formCadastro = document.querySelector('#cadastroForm');
const nomeCadastro = document.querySelector('#nome');
const matriculaCadastro = document.querySelector('#matricula');
const senhaCadastro = document.querySelector('#senha');
const confirmeSenha = document.querySelector('#confirmeSenha');
const cadastroErro = document.querySelector('main .popUpSingUp form p.erroCadastro');
let controle = true;

formCadastro.addEventListener('submit', event =>{
  event.preventDefault();

  if(nomeCadastro.value === ""){
    cadastroErro.style.display = 'block';
    controle = false;
    return;
  }
  else controle = true;

  if(!matriculaValidation(matriculaCadastro.value, 12)) {
    cadastroErro.style.display = 'block';
    controle = false;
    return;
  }
  else controle = true;

  if(!passwordValidation(senhaCadastro.value, 8)){
    cadastroErro.style.display = 'block';
    controle = false;
    return;
  }
  else controle = true;

  if(senhaCadastro.value != confirmeSenha.value){
    cadastroErro.style.display = 'block';
    controle = false;
    return;
  }
  else controle = true;

  if(controle === true){
    complete.addEventListener('click', completar);
  }
  
})


//função de abrir o popUp de cadastro completo
function completar() {
  let finish = document.querySelector('.popUpSingUp .concluido')
  finish.style.display = 'block'
  cadastroErro.style.display = 'none';
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