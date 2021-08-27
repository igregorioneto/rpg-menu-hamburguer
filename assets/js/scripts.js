let openMenu = false

let clickMenu = document.querySelector('.btn-menu')
let menuNormal = document.querySelector('.menu-normal')

window.addEventListener('load', () => {
  menuNormal.classList.add('esconder-menu')
})

clickMenu.addEventListener('click', () => {
  if (!openMenu) {
    clickMenu.classList.add('open')
    menuNormal.classList.remove('esconder-menu')
    menuNormal.classList.add('normalizar-menu')

    openMenu = true
  } else {
    clickMenu.classList.remove('open')
    menuNormal.classList.remove('normalizar-menu')
    menuNormal.classList.add('esconder-menu')

    openMenu = false
  }
})