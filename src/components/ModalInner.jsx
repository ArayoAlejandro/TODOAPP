import { useState } from 'react'
import { useCard } from '../hooks/useCard'

export const ModdaInner = () => {
  const { setModal, changeCompleteCard, getCardUuid } = useCard()
  const {
    title,
    description,
    date,
    isComplete,
    uuid
  } = getCardUuid()

  const [comple, setComple] = useState(isComplete)
  const handleClick = () => {
    setComple(prev => !prev)
    changeCompleteCard(uuid)
  }

  return (
    <div className='modal-inner'>
      <header>
        <h2>
          <span onClick={handleClick} className='check-input '>{comple ? '✅' : '⬜'}</span>
          {title}
        </h2>
        <span>
          {date}
        </span>
        <button onClick={() => setModal({ isOpen: false, uuid: '' })}>Close</button>
      </header>
      <p>
        {description}
      </p>
    </div>
  )
}
