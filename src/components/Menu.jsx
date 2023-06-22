import { NavLink, Outlet } from 'react-router-dom'
import { CardPagesRouters } from '../utils'
import { useMenu } from '../hooks/useMenu'

export const Menu = () => {
  const { handleClick, handleMouseEnter, handleMouseLeave } = useMenu()
  return (
    <>
      <nav id='menu' onMouseLeave={handleMouseLeave}>
        <div>
          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to={CardPagesRouters.all}
            onClick={e => handleClick(e, CardPagesRouters.all)}
            onMouseEnter={handleMouseEnter}
          >
            TODOS
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to={CardPagesRouters.working}
            onClick={e => handleClick(e, CardPagesRouters.working)}
            onMouseEnter={handleMouseEnter}
          >
            TRABAJANDO
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) => isActive ? 'active' : ''}
            to={CardPagesRouters.made}
            onClick={e => handleClick(e, CardPagesRouters.made)}
            onMouseEnter={handleMouseEnter}
          >
            ACABADOS
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
