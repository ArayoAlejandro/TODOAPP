import { CardsList } from './CardList'

export function CardPage ({ imgOutre, description, todo }) {
  const IconPage = () => {
    return (
      <div className='info-all-cards'>
        <div className='info-all-cards-inner'>
          <img width='700px' src={imgOutre} alt='Outre icon made by Charco' />
          <p>{description}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {
        todo.length !== 0
          ? <CardsList todo={todo} />
          : <IconPage />
      }
    </div>
  )
}
