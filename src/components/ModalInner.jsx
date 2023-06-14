import { useCard } from '../hooks/useCard'

export const ModdaInner = () => {
  const { changeCompleteCard, getCardId } = useCard()
  const card = getCardId()
  if (card === undefined) return

  const {
    title,
    description,
    date,
    isCompleted,
    id
  } = card

  const handleClick = () => {
    changeCompleteCard(id)
  }

  return (
    <div className='modal-inner'>
      <header>
        <div>
          <span onClick={handleClick} className='check-input '>{isCompleted ? '✅' : '⬜'}</span>
          <h2 className={isCompleted ? 'completed' : ''}>{title}</h2>
        </div>
        <span>
          {date}
        </span>
      </header>
      <textarea rows='10' defaultValue={description} />
    </div>
  )
}
