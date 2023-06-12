import { useState } from 'react'
import { useCard } from '../hooks/useCard'

export function Card ({ card: { uuid, title, date, description, isComplete } }) {
  const [doneTodo, setDoneTodo] = useState(isComplete)
  const { setCard, setModal, setTodo } = useCard()

  const removeCard = () => {
    setTodo(prev => prev.filter(e => e.uuid !== uuid))
  }

  const completCard = () => {
    setDoneTodo(prev => !prev)
  }

  const handleClick = () => {
    setCard({ title, date, description, isComplete })
    setModal(true)
  }

  return (
    <li className={doneTodo ? 'check' : ''}>
      <header>
        <div>
          <div onClick={completCard}>{doneTodo ? '✅' : '📌'}</div>
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
