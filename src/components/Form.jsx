import { v4 as uuidv4 } from 'uuid'
import { useCard } from '../hooks/useCard'

export const Form = () => {
  const { setTodo } = useCard()

  const handleSubmit = e => {
    e.preventDefault()
    const textInput = e.target.title.value
    const textArea = e.target.description.value
    e.target.reset()
    setTodo(prev => {
      return [...prev, { uuid: uuidv4(), title: textInput, description: textArea, date: new Date().toLocaleDateString(), isComplete: false }]
    })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <label htmlFor='title'>Titulo</label>
      <input type='text' name='title' />
      <label htmlFor='title'>Descripción</label>
      <textarea name='description' />
      <button>Send</button>
    </form>
  )
}
