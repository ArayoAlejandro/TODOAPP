import { useState, useEffect } from 'react'
import { useCard } from '../hooks/useCard'
import { useForm } from '../hooks/useForm'

export const CardViewModal = ({ card: { id, title, date, description, isCompleted }, closeModal }) => {
  const { modifyCard } = useCard()
  const { onChange, inputChar, setInputChar } = useForm({ closeModal })

  const [checkbox, setCheckbox] = useState(isCompleted)
  const [edit, setEdit] = useState(false)
  const [descriptionArea, setDescriptionArea] = useState(description)

  useEffect(() => {
    setInputChar(title)
  }, [])

  const handleChangeTextarea = (e) => {
    e.preventDefault()
    setDescriptionArea(e.target.value)
  }

  const handleClick = () => {
    setCheckbox(prev => {
      const newCard = { id, isCompleted: !prev, description, title }
      modifyCard(newCard)
      return !prev
    })
  }

  const handleSave = () => {
    if (edit) {
      const newCard = { id, isCompleted, description: descriptionArea, title: inputChar }
      modifyCard(newCard)
    }
    setEdit(prev => !prev)
  }

  return (
    <div className='modal-inner'>
      <header>
        <div>
          <span onClick={handleClick} className='check-input '>{checkbox ? '✅' : '⬜'}</span>
          {
            !edit
              ? <h2 className={checkbox ? 'completed' : ''}>{inputChar}</h2>
              : <input onChange={onChange} defaultValue={title} value={inputChar} />
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
