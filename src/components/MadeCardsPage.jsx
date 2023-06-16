import { useCard } from '../hooks/useCard'

import lightbulb from '../assets/lightbulb-outre.svg'
import { CardsList } from './CardList.'

export function MadeCardsPage () {
  const { todo } = useCard()
  const newCard = todo.filter(e => e.isCompleted === true)

  const LightBulbIconPage = () => {
    return (
      <div className='info-all-cards'>
        <div className='info-all-cards-inner'>
          <a href='https://www.charco.design/outre-quirky-icons' target='_blank' rel='noreferrer'>
            <img width='700px' src={lightbulb} alt='Outre alert icon made by Charco' />
          </a>
          <p>No hay tareas terminadas empieza o acaba alguna</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        newCard.length !== 0
          ? <CardsList todo={newCard} />
          : <LightBulbIconPage />
      }
    </>
  )
}
