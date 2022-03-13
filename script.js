const list = document.querySelectorAll('.lista')
function activeLink(){
  list.forEach((item) => 
  item.classList.remove('ativar'));
  this.classList.add('ativar');
}
  list.forEach((item) => 
  item.addEventListener('click', activeLink));