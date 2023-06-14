import { v4 as uuidv4 } from 'uuid'
import { useCard } from '../hooks/useCard'
import { useState } from 'react'
import { cardSetLocalStorage, enableClickBody } from '../utils'

export const Form = ({ closeModal }) => {
  const { setTodo } = useCard()
  const [error, setError] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    const textInput = e.target.title.value
    const textArea = e.target.description.value
    if (textArea === '' || textInput === '') {
      setError('Falta campos por rellenar')
      return
    }
    e.target.reset()
    enableClickBody()
    closeModal()

    setTodo(prev => {
      const newCards =
      [
        ...prev,
        {
          id: uuidv4(),
          title: textInput,
          description: textArea,
          date: new Date().toLocaleDateString(),
          isCompleted: false
        }
      ]

      cardSetLocalStorage(newCards)

      return newCards
    })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor='title'>Titulo</label>
      <input type='text' name='title' />
      <label htmlFor='title'>Descripción</label>
      <textarea name='description' />
      <button>Enviar</button>
      {error && <span>{error}</span>}
    </form>
  )
}
