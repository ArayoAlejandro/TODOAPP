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
        <div>
          <div className='check-input' onClick={() => changeCompleteCard(uuid)}>{isCompleted ? '✅' : '⬜'}</div>
          <h2>{title}</h2>
        </div>
        <div>
          <p>{date}</p>
          <button onClick={handleClick}>Abrir</button>
          <button onClick={() => removeCard(date)}>Borrar</button>
        </div>
      </header>
    </li>
  )
}
