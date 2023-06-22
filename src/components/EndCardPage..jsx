import { useCard } from '../hooks/useCard'
import { CardsList } from './CardList'

export function EndCardPage ({ imgOutre, description, todo }) {
  const { deleteAllCards } = useCard()

  const handleClick = () => {
    deleteAllCards()
  }

  const IconPage = () => {
    return (
      <div className='info-all-cards'>
        <div className='info-all-cards-inner'>
          <a href='https://www.charco.design/outre-quirky-icons' target='_blank' rel='noreferrer'>
            <img width='700px' src={imgOutre} alt='Outre icon made by Charco' />
          </a>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  const List = () => {
    return (
      <div className='end-cards-list'>
        <CardsList todo={todo} />
        <button onClick={handleClick} className='delete-button'>Delete</button>
      </div>
    )
  }

  return (
    <>
      {
        todo.length !== 0
          ? <List />
          : <IconPage />
      }
    </>
  )
}
