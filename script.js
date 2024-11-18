const menuLista = document.getElementById('menu-lista'); 
const menuLista2 = document.getElementById('menu-lista2'); 
const menuImagem = document.getElementById('menu1__imagemMenu');
const menuItemCategoria = document.getElementById('menu2__itemCategoria');

function ativarMenuLista(){ 
    menuLista.classList.toggle('active');
}
function ativarMenuLista2(){ 
    menuLista2.classList.toggle('active');
}

menuImagem.addEventListener('click', ativarMenuLista);
menuItemCategoria.addEventListener('click', ativarMenuLista2);