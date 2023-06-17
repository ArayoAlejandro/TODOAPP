import { useState, useRef, useEffect } from 'react'
import './App.css'
import { AllCardsPage } from './components/AllCardsPage'
import { Header } from './components/Header'
import { WorkCardsPage } from './components/WorkCardsPage'
import { MadeCardsPage } from './components/MadeCardsPage'

const bodyMarginLeft = document.defaultView.getComputedStyle(document.body, '').getPropertyValue('margin-left').split('px')[0]

function App () {
  const CardPage = {
    all: <AllCardsPage />,
    work: <WorkCardsPage />,
    made: <MadeCardsPage />
  }

  const [page, setPage] = useState(CardPage.all)
  const [menu, setMenu] = useState({})
  const [menuActive, setMenuActive] = useState({})
  const activeElement = useRef()

  useEffect(() => {
    if (window.localStorage.getItem('menu-position') === null) {
      const fistP = document.querySelector('nav>div>p')
      activeElement.current = fistP
      fistP.classList.add('active')
      const { left, width, height } = fistP.getBoundingClientRect()
      setMenu({ left: left - bodyMarginLeft, width, height })
    } else {
      const menuLS = JSON.parse(window.localStorage.getItem('menu-position'))
      setMenu(menuLS.menuPosition)
      setMenuActive({ left: menuLS.menuPosition.left, width: menuLS.menuPosition.width })
      activeElement.current = document.getElementById(menuLS.pageActive)
      activeElement.current.classList.add('active')
    }
  }, [])

  const handleMouseEnter = (e) => {
    const element = e.target
    const { left, width, height } = element.getBoundingClientRect()

    setMenu({ left: left - bodyMarginLeft, width, height })
  }

  const handleClick = (e, page) => {
    setPage(page)
    const { left, width } = e.target.getBoundingClientRect()

    if (activeElement.current !== undefined) {
      activeElement.current.classList.remove('active')
    }
    activeElement.current = e.target
    activeElement.current.classList.add('active')

    setMenuActive({ left: left - bodyMarginLeft, width })
    setMenu(prev => {
      const newMenuPosition = { ...prev, left: left - bodyMarginLeft, width }

      window.localStorage.setItem('menu-position', JSON.stringify({ menuPosition: newMenuPosition, pageActive: e.target.id }))
      return newMenuPosition
    })
  }

  const handleMouseLeave = () => {
    const { left, width } = menuActive
    setMenu(prev => { return { ...prev, left, width } })
  }

  return (
    <main>
      <Header />

      <div className='bg' style={{ transform: `translate(${menu.left}px, 0px)`, width: menu.width, height: menu.height }} />
      <nav id='menu' onMouseLeave={handleMouseLeave}>
        <div>
          <p id='todo' onClick={e => handleClick(e, CardPage.all)} onMouseEnter={handleMouseEnter}>TODOS</p>
        </div>
        <div>
          <p id='work' onClick={e => handleClick(e, CardPage.work)} onMouseEnter={handleMouseEnter}>TRABAJANDO</p>
        </div>
        <div>
          <p id='made' onClick={e => handleClick(e, CardPage.made)} onMouseEnter={handleMouseEnter}>ACABADOS</p>
        </div>
      </nav>
      {
        page
      }
    </main>
  )
}
export default App
