let openMenu = false

let clickMenu = document.querySelector('.btn-menu')
let menuNormal = document.querySelector('.menu-normal')
let rpgIMG = document.querySelector('.rpg-img')
let removerMargemBTN = document.querySelector('.btn-menu')

window.addEventListener('load', () => {
  menuNormal.classList.add('esconder-menu')
  removerMargemBTN.classList.add('btn-menu-margem')
})

clickMenu.addEventListener('click', () => {
  if (!openMenu) {
    clickMenu.classList.add('open')
    menuNormal.classList.remove('esconder-menu')
    menuNormal.classList.add('normalizar-menu')

    rpgIMG.classList.remove('normalizar-imagem')
    rpgIMG.classList.add('esconder-imagem')

    removerMargemBTN.classList.remove('btn-menu-margem')

    openMenu = true
  } else {
    clickMenu.classList.remove('open')
    menuNormal.classList.remove('normalizar-menu')
    menuNormal.classList.add('esconder-menu')

    rpgIMG.classList.remove('esconder-imagem')
    rpgIMG.classList.add('normalizar-imagem')

    removerMargemBTN.classList.add('btn-menu-margem')

    openMenu = false
  }
})