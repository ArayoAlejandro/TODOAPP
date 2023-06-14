const bodyElement = document.querySelector('body')

const localStorage = window.localStorage

export const cardGetLocalStorage = JSON.parse(localStorage.getItem('cards'))

export const cardSetLocalStorage = newCards => localStorage.setItem('cards', JSON.stringify(newCards))

export const disableClickBody = () => {
  bodyElement.classList.add('disabled')
}

export const enableClickBody = () => {
  bodyElement.classList.remove('disabled')
}
