
//botão de requerimento
const requerimento = document.getElementById('btnRequerimento');
requerimento.addEventListener('click', popUp);

//função de abrir o popUp de login
function popUp(){
  let SingIn = document.querySelector('.popUpLogin')
  SingIn.style.display = 'flex';
}

//botão de cadastrar-se 
const cad = document.getElementById('cadastro');
cad.addEventListener('click', popUp2);
//função de abrir o popUp de cadastro
function popUp2(){
  let SingUp = document.querySelector('.popUpSingUp');
  SingUp.style.display = 'flex';
}

//botão de cadastro
const complete = document.getElementById('sendCadastro');
complete.addEventListener('click', completar);
//função de abrir o popUp de cadastro completo
function completar(){
  let finish = document.querySelector('.popUpSingUp .concluido');
  finish.style.display = 'block';
}


//Botão de fechar login
const fecharLog = document.querySelector('.fecharLog');
fecharLog.addEventListener('click', fecharPop);
//Botão de fechar cadastro
const fecharSing = document.querySelector('.fecharSing');
fecharSing.addEventListener('click', fecharPop);
fecharSing.addEventListener('click', fecharPop2);
fecharSing.addEventListener('click', fecharComplete);

//Botão de fechar login
function fecharPop(){
  let pop = document.querySelector('.popUpLogin')
  pop.style.display = 'none';
}
//função de fechar cadastro
function fecharPop2(){
  let pop = document.querySelector('.popUpSingUp')
  pop.style.display = 'none';
}


function fecharComplete(){
  let finish = document.querySelector('.popUpSingUp .concluido');
  finish.style.display = 'none';
}
