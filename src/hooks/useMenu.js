import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { CardPagesRouters, menuGetLocalStorage, menuSetLocalStorage } from '../utils'

export const useMenu = () => {
  const [menu, setMenu] = useState({})
  const [menuActive, setMenuActive] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (menuGetLocalStorage === null) {
      const fistP = document.querySelector('nav>div>a')
      fistP.classList.add('active')
      const { left, width, height, top } = fistP.getBoundingClientRect()

      setMenu({ left, width, height, top })
      navigate(CardPagesRouters.all)
    } else {
      const menuLS = menuGetLocalStorage

      setMenu(menuLS.menuPosition)
      setMenuActive({
        left: menuLS.menuPosition.left,
        top: menuLS.menuPosition.top,
        width: menuLS.menuPosition.width,
        height: menuLS.menuPosition.height
      })
      navigate(menuLS.page)
    }
  }, [])

  useEffect(() => {
    const bg = document.querySelector('div.bg')
    bg.style.setProperty('--left', `${menu.left}px`)
    bg.style.setProperty('--top', `${menu.top}px`)
    bg.style.setProperty('--width', `${menu.width}px`)
    bg.style.setProperty('--height', `${menu.height}px`)
  }, [menu])

  const handleMouseEnter = (e) => {
    const element = e.target

    const { left, width, height, top } = element.getBoundingClientRect()
    setMenu({ left, width, height, top })
  }

  const handleClick = (e, page) => {
    const { left, width, height, top } = e.target.getBoundingClientRect()
    setMenuActive({ left, width, height, top })

    setMenu(prev => {
      const newMenuPosition = { ...prev, left, width, height, top }
      menuSetLocalStorage({ menuPosition: newMenuPosition, page })
      return newMenuPosition
    })
  }

  const handleMouseLeave = () => {
    const { left, width, height, top } = menuActive

    setMenu(prev => { return { ...prev, left, width, height, top } })
  }

  return { handleMouseEnter, handleMouseLeave, handleClick }
}
