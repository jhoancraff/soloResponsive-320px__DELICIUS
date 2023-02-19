const menu = document.querySelector('.menu-mobile')
const buscador = document.querySelector('.content-buscador')
const touchMenu = document.querySelector('.menu-img__header')
const touchClosed = document.querySelector('.img-closed__menu')
const touchBuscador = document.querySelector('.search-img__header')

touchMenu.addEventListener('click', desplegarMenu)
touchClosed.addEventListener('click', cerrarMenu)
touchBuscador.addEventListener('click', abrirBuscador)

function desplegarMenu(){
    menu.classList.remove('inactivo')
    
}
function cerrarMenu(){
    menu.classList.add('inactivo')
}

function abrirBuscador(){
    buscador.classList.toggle('inactivo')
}