import { CardPagesRouters } from '../utils'
import { useMenu } from '../hooks/useMenu'

export const Menu = ({ setFilter, filterSelected }) => {
  const { handleClick, handleMouseEnter, handleMouseLeave } = useMenu()

  const handleClickAncor = (e, filter) => {
    e.preventDefault()
    setFilter(filter)
    handleClick(e, filter)
  }

  return (
    <nav id='menu' onMouseLeave={handleMouseLeave}>
      <ul>
        <AncorMenu
          handleClickAncor={handleClickAncor}
          handleMouseEnter={handleMouseEnter}
          page={CardPagesRouters.all}
          title='TODOS'
          activeFilter={filterSelected}
        />
        <AncorMenu
          handleClickAncor={handleClickAncor}
          handleMouseEnter={handleMouseEnter}
          page={CardPagesRouters.working}
          title='TRABAJANDO'
          activeFilter={filterSelected}
        />
        <AncorMenu
          handleClickAncor={handleClickAncor}
          handleMouseEnter={handleMouseEnter}
          page={CardPagesRouters.made}
          title='ACABADOS'
          activeFilter={filterSelected}
        />
      </ul>
    </nav>
  )
}

const AncorMenu = ({ handleClickAncor, handleMouseEnter, page, title, activeFilter }) => {
  return (
    <li>
      <a
        className={activeFilter === page ? 'active' : ''}
        onClick={e => handleClickAncor(e, page)}
        onMouseEnter={handleMouseEnter}
      >
        {title}
      </a>
    </li>
  )
}
