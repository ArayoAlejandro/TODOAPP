import { useCard } from '../hooks/useCard'

export const ModdaInner = () => {
  const { card, setModal } = useCard()

  const {
    title,
    description,
    date,
    isComplete
  } = card

  return (
    <div className='modal-inner'>
      <header>
        <h2>
          {title}
          {isComplete ? '😀' : '❌'}
        </h2>
        <span>
          {date}
        </span>
        <button onClick={() => setModal(false)}>Close</button>
      </header>
      <p>
        {description}
      </p>
    </div>
  )
}
