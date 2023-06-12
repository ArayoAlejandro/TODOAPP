import { useCard } from '../hooks/useCard'

export function Card ({ todo: { uuid, title, date, isCompleted } }) {
  const { setModal, setTodo, changeCompleteCard } = useCard()

  const removeCard = () => {
    setTodo(prev => prev.filter(e => e.uuid !== uuid))
  }

  const handleClick = () => {
    setModal({ isOpen: true, uuid })
  }

  return (
    <li className={isCompleted ? 'check' : ''}>
      <header>
        <div className='info-card'>
          <div>
            <span className='check-input' onClick={() => changeCompleteCard(uuid)}>{isCompleted ? '✅' : '⬜'}</span>
            <h2>{title}</h2>
          </div>
          <p>{date}</p>
        </div>
        <div className='action-card'>
          <button onClick={handleClick}>Abrir</button>
          <button onClick={() => removeCard(date)}>Borrar</button>
        </div>
      </header>
    </li>
  )
}
