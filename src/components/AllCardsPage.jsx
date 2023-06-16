import { useCard } from '../hooks/useCard'

import alert from '../assets/alert-outre.svg'
import { CardsList } from './CardList.'

export function AllCardsPage () {
  const { todo } = useCard()

  const AlertIconPage = () => {
    return (
      <div className='info-all-cards'>
        <div className='info-all-cards-inner'>
          <a href='https://www.charco.design/outre-quirky-icons' target='_blank' rel='noreferrer'>
            <img width='700px' src={alert} alt='Outre alert icon made by Charco' />
          </a>
          <p> Añade ya una nueva tarea!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {
        todo.length !== 0
          ? <CardsList todo={todo} />
          : <AlertIconPage />
      }
    </>
  )
}
