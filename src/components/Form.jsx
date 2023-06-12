import { v4 as uuidv4 } from 'uuid'
import { useCard } from '../hooks/useCard'
import { useState } from 'react'

export const Form = () => {
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
    setTodo(prev => {
      return [
        ...prev,
        {
          uuid: uuidv4(),
          title: textInput,
          description: textArea,
          date: new Date().toLocaleDateString(),
          isComplete: false
        }
      ]
    })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor='title'>Titulo</label>
      <input type='text' name='title' />
      <label htmlFor='title'>Descripción</label>
      <textarea name='description' />
      <button>Send</button>
      {error && <span>{error}</span>}
    </form>
  )
}
