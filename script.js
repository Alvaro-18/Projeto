const requerimento = document.getElementById('requerimento');
requerimento.addEventListener('click', popUp);

function popUp(){
  let SingIn = document.querySelector('.popUpLogin')
  SingIn.style.display = 'flex';
}

const cad = document.getElementById('cadastro');
cad.addEventListener('click', popUp2);

function popUp2(){
  let SingUp = document.querySelector('.popUpSingUp');
  SingUp.style.display = 'flex';
}

const complete = document.getElementById('complete');
complete.addEventListener('click', completar);

function completar(){
  let finish = document.querySelector('.popUpSingUp .concluido');
  finish.style.display = 'block';
}
