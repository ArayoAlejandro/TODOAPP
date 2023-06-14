import { useCard } from '../hooks/useCard'

export function Card ({ todo: { id, title, date, isCompleted }, setModal }) {
  const { setId, removeCard, changeCompleteCard } = useCard()

  const handleClick = () => {
    setModal(true)
    setId(id)
  }

  return (
    <li className={isCompleted ? 'check' : ''}>
      <header>
        <div className='info-card'>
          <div>
            <span className='check-input' onClick={() => changeCompleteCard(id)}>{isCompleted ? '✅' : '⬜'}</span>
            <h2 className={isCompleted ? 'completed' : ''}>{title}</h2>
          </div>
          <p>{date}</p>
        </div>
        <div className='action-card'>
          <button onClick={handleClick}>Abrir</button>
          <button onClick={() => removeCard(id)}>Borrar</button>
        </div>
      </header>
    </li>
  )
}
