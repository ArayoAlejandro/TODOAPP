const bodyElement = document.querySelector('body')

const localStorage = window.localStorage

export const cardGetLocalStorage = JSON.parse(localStorage.getItem('cards'))
export const cardSetLocalStorage = newCards => localStorage.setItem('cards', JSON.stringify(newCards))

export const menuGetLocalStorage = JSON.parse(localStorage.getItem('menu-position'))
export const menuSetLocalStorage = newMenu => localStorage.setItem('menu-position', JSON.stringify(newMenu))

export const disableClickBody = () => {
  bodyElement.classList.add('disabled')
}

export const enableClickBody = () => {
  bodyElement.classList.remove('disabled')
}

export const CardPagesRouters = {
  all: 'all',
  working: 'working',
  made: 'made'
}
