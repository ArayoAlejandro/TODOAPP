import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { CardPagesRouters, bodyMarginLeft, menuGetLocalStorage, menuSetLocalStorage } from '../utils'

export const useMenu = () => {
  const [menu, setMenu] = useState({})
  const [menuActive, setMenuActive] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    if (menuGetLocalStorage === null) {
      const fistP = document.querySelector('nav>div>a')
      fistP.classList.add('active')
      const { left, width, height } = fistP.getBoundingClientRect()

      setMenu({ left: left - bodyMarginLeft, width, height })
      navigate(CardPagesRouters.all)
    } else {
      const menuLS = menuGetLocalStorage

      setMenu(menuLS.menuPosition)
      setMenuActive({ left: menuLS.menuPosition.left, width: menuLS.menuPosition.width })
      navigate(menuLS.page)
    }
  }, [])

  const handleMouseEnter = (e) => {
    const element = e.target

    const { left, width, height } = element.getBoundingClientRect()
    setMenu({ left: left - bodyMarginLeft, width, height })
  }

  const handleClick = (e, page) => {
    const { left, width } = e.target.getBoundingClientRect()

    setMenuActive({ left: left - bodyMarginLeft, width })

    setMenu(prev => {
      const newMenuPosition = { ...prev, left: left - bodyMarginLeft, width }
      menuSetLocalStorage({ menuPosition: newMenuPosition, page })
      return newMenuPosition
    })
  }

  const handleMouseLeave = () => {
    const { left, width } = menuActive

    setMenu(prev => { return { ...prev, left, width } })
  }

  return { handleMouseEnter, handleMouseLeave, handleClick, menu }
}
