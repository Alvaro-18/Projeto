
/*=====================Validação do form Login=====================*/
const formCadastro = document.querySelector('#cadastro'); 
const nome = document.querySelector('#nome'); 
const matricula = document.querySelector('#matricula'); 
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirmeSenha');
const erroCadastro = document.querySelector('form p.erroPreenchimentoCad');
let controle = true;

//declaração do botão de envio
const cadastro = document.querySelector('#cadastroBtn');


formCadastro.addEventListener('submit', event => {
  event.preventDefault();

  //validação do nome
  if(nome.value === ""){
    erroCadastro.style.display = 'block';
    controle = false;
    return;
  }
  else{
    controle = true;
  }

  //validação do cadastro
  if(!matriculaValidation(matricula.value, 12)){
    erroCadastro.style.display = 'block';
    controle = false;
    return;
  }
  else{
    controle = true;
  }

  //validação da senha
  if(!passwordValidation(senha.value, 8)){
    erroCadastro.style.display = 'block';
    controle = false;
    return;
  }
  else{
    controle = true;
  }

  //confirmação de senha
  if(senha.value != confirmarSenha.value){
    erroCadastro.style.display = 'block';
    controle = false;
    return;
  }
  else{
    controle = true;
  }

  if(controle === true){
    cadastro.addEventListener('click', complete);
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


function complete(){
  let page = document.querySelector('.concluido');
  page.style.display = 'block';
}
