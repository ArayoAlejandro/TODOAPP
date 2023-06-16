import { useCard } from '../hooks/useCard'

import check from '../assets/check-outre.svg'
import { CardsList } from './CardList.'

export function WorkCardsPage () {
  const { todo } = useCard()
  const newCard = todo.filter(e => e.isCompleted !== true)
  const CheckIconPage = () => {
    return (
      <div className='info-all-cards'>
        <div className='info-all-cards-inner'>
          <a href='https://www.charco.design/outre-quirky-icons' target='_blank' rel='noreferrer'>
            <img width='700px' src={check} alt='Outre alert icon made by Charco' />
          </a>
          <p> No hay tareas pendientes, felicidades!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        newCard.length !== 0
          ? <CardsList todo={newCard} />
          : <CheckIconPage />
      }
    </>
  )
}
