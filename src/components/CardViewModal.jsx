import { useState } from 'react'
import { useCard } from '../hooks/useCard'
import { useForm } from '../hooks/useForm'

export const CardViewModal = (closeModal) => {
  const { changeCompleteCard, getCardId, editCard } = useCard()
  const { onChange, input } = useForm({ closeModal })
  const [edit, setEdit] = useState(false)
  const card = getCardId()
  if (card === undefined) return
  const {
    title,
    description,
    date,
    isCompleted,
    id
  } = card

  const [descriptionArea, setDescriptionArea] = useState()

  const handleChangeTextarea = (e) => {
    e.preventDefault()
    setDescriptionArea(e.target.value)
  }

  const handleClick = () => {
    changeCompleteCard(id)
  }

  const handleSave = () => {
    if (edit) {
      editCard({ title: input || title, description: descriptionArea || description })
    }
    setEdit(prev => !prev)
  }

  return (
    <div className='modal-inner'>
      <header>
        <div>
          <span onClick={handleClick} className='check-input '>{isCompleted ? '✅' : '⬜'}</span>
          {
            !edit
              ? <h2 className={isCompleted ? 'completed' : ''}>{title}</h2>
              : <input onChange={onChange} defaultValue={title} value={input} />
          }
        </div>
        <div>
          <span>
            {date}
          </span>
          <button onClick={handleSave}>{edit ? 'Guardar' : '✏'}</button>
        </div>
      </header>
      <textarea rows='10' defaultValue={description} onChange={handleChangeTextarea} value={descriptionArea} disabled={!edit} />
    </div>
  )
}
