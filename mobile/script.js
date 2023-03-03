const cadastro = document.querySelector('main button');
cadastro.addEventListener('click', complete);

function complete(){
  let page = document.querySelector('.concluido')
  page.style.display = 'block'
}
