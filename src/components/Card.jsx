import { useCard } from '../hooks/useCard'

export function Card ({ todo: { id, title, date, description, isCompleted }, openModal, setCard }) {
  const { removeCardId, modifyCard } = useCard()

  const handleClick = () => {
    openModal()
    setCard({ id, title, date, description, isCompleted })
  }

  const handleToggle = () => {
    modifyCard({ id, title, description, isCompleted: !isCompleted })
  }

  return (
    <li className={isCompleted ? 'check' : ''}>
      <header>
        <div className='info-card'>
          <div>
            <span className='check-input' onClick={handleToggle}>{isCompleted ? '✅' : '⬜'}</span>
            <p>{date}</p>
            <h2 className={isCompleted ? 'completed' : ''}>{title}</h2>
          </div>
        </div>
        <div className='action-card'>
          <button onClick={handleClick}>Abrir</button>
          <button onClick={() => removeCardId({ id })}>Borrar</button>
        </div>
      </header>
    </li>
  )
}
